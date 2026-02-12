output "app_id" {
  description = "App Platform app ID (set as DO_APP_ID GitHub secret)"
  value       = digitalocean_app.mussitech.id
}

output "app_default_url" {
  description = "App Platform default URL"
  value       = digitalocean_app.mussitech.default_ingress
}

output "app_live_url" {
  description = "App Platform live URL"
  value       = digitalocean_app.mussitech.live_url
}

output "app_urn" {
  description = "App Platform URN"
  value       = digitalocean_app.mussitech.urn
}

output "dns_apex" {
  description = "Cloudflare DNS record for apex domain"
  value       = "${cloudflare_record.apex.name} → ${cloudflare_record.apex.content}"
}

output "dns_www" {
  description = "Cloudflare DNS record for www"
  value       = "${cloudflare_record.www.name} → ${cloudflare_record.www.content}"
}

output "deployment_summary" {
  description = "Summary of deployed infrastructure"
  value = <<-EOT
    App:    ${digitalocean_app.mussitech.spec[0].name}
    Region: ${digitalocean_app.mussitech.spec[0].region}
    URL:    https://${var.app_domain}
    Size:   ${var.instance_size} x${var.instance_count}
  EOT
}
