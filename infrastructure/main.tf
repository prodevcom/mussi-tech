# ── DigitalOcean App Platform ─────────────────────────────────
resource "digitalocean_app" "mussitech" {
  spec {
    name   = var.app_name
    region = var.region

    domain {
      name = var.app_domain
      type = "PRIMARY"
    }

    domain {
      name = "www.${var.app_domain}"
      type = "ALIAS"
    }

    service {
      name               = "web"
      instance_size_slug = var.instance_size
      instance_count     = var.instance_count
      http_port          = 3000

      github {
        repo           = var.github_repo
        branch         = var.github_branch
        deploy_on_push = false
      }

      build_command = "npm ci && npm run build && cp -r public .next/standalone/public && cp -r .next/static .next/standalone/.next/static"
      run_command   = "node .next/standalone/server.js"

      env {
        key   = "NODE_ENV"
        value = "production"
      }

      env {
        key   = "PORT"
        value = "3000"
      }

      env {
        key   = "HOSTNAME"
        value = "0.0.0.0"
      }

      health_check {
        http_path             = "/en"
        initial_delay_seconds = 15
        period_seconds        = 10
        timeout_seconds       = 5
        success_threshold     = 1
        failure_threshold     = 3
      }
    }
  }
}

# ── Cloudflare DNS ────────────────────────────────────────────
resource "cloudflare_record" "apex" {
  zone_id = var.cloudflare_zone_id
  name    = "@"
  content = digitalocean_app.mussitech.default_ingress
  type    = "CNAME"
  proxied = true
  ttl     = 1
}

resource "cloudflare_record" "www" {
  zone_id = var.cloudflare_zone_id
  name    = "www"
  content = digitalocean_app.mussitech.default_ingress
  type    = "CNAME"
  proxied = true
  ttl     = 1
}

# ── Cloudflare Page Rule: www → apex redirect ─────────────────
resource "cloudflare_page_rule" "www_redirect" {
  zone_id  = var.cloudflare_zone_id
  target   = "www.${var.app_domain}/*"
  priority = 1

  actions {
    forwarding_url {
      url         = "https://${var.app_domain}/$1"
      status_code = 301
    }
  }
}
