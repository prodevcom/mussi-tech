# ── Credentials ───────────────────────────────────────────────
variable "do_token" {
  description = "DigitalOcean API token"
  type        = string
  sensitive   = true
}

variable "cloudflare_api_token" {
  description = "Cloudflare API token (Zone:DNS:Edit, Zone:Cache Purge:Purge)"
  type        = string
  sensitive   = true
}

variable "cloudflare_zone_id" {
  description = "Cloudflare Zone ID for the domain"
  type        = string
  sensitive   = true
}

# ── App configuration ─────────────────────────────────────────
variable "app_name" {
  description = "Name for the DO App Platform app"
  type        = string
  default     = "mussitech"
}

variable "app_domain" {
  description = "Primary domain for the site"
  type        = string
  default     = "mussi.tech"
}

variable "region" {
  description = "DigitalOcean region slug"
  type        = string
  default     = "nyc"
}

# ── GitHub ────────────────────────────────────────────────────
variable "github_repo" {
  description = "GitHub repository (owner/repo)"
  type        = string
  default     = "prodevcom/mussi-tech"
}

variable "github_branch" {
  description = "Branch to deploy from"
  type        = string
  default     = "main"
}

# ── Sizing ────────────────────────────────────────────────────
variable "instance_size" {
  description = "App Platform instance size (basic-xxs = $5/mo)"
  type        = string
  default     = "basic-xxs"
}

variable "instance_count" {
  description = "Number of instances"
  type        = number
  default     = 1
}
