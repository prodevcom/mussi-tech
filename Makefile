.PHONY: dev build lint start tag-patch tag-minor tag-major tag-list tf-init tf-plan tf-apply tf-output

# ── Dev ───────────────────────────────────────────────────────
dev:
	npm run dev

build:
	npm run build

lint:
	npm run lint

start:
	npm run start

# ── Versioning ────────────────────────────────────────────────
define tag_version
	@CURRENT=$$(git describe --tags --abbrev=0 2>/dev/null || echo "v0.0.0"); \
	MAJOR=$$(echo $$CURRENT | sed 's/v//' | cut -d. -f1); \
	MINOR=$$(echo $$CURRENT | sed 's/v//' | cut -d. -f2); \
	PATCH=$$(echo $$CURRENT | sed 's/v//' | cut -d. -f3); \
	case "$(1)" in \
		patch) PATCH=$$((PATCH + 1)) ;; \
		minor) MINOR=$$((MINOR + 1)); PATCH=0 ;; \
		major) MAJOR=$$((MAJOR + 1)); MINOR=0; PATCH=0 ;; \
	esac; \
	NEW="v$$MAJOR.$$MINOR.$$PATCH"; \
	echo "Current: $$CURRENT → New: $$NEW"; \
	read -p "Create and push tag $$NEW? [y/N] " CONFIRM; \
	if [ "$$CONFIRM" = "y" ] || [ "$$CONFIRM" = "Y" ]; then \
		git tag -a "$$NEW" -m "Release $$NEW"; \
		git push origin "$$NEW"; \
		echo "Tag $$NEW pushed — deploy workflow triggered"; \
	else \
		echo "Cancelled"; \
	fi
endef

tag-patch:
	$(call tag_version,patch)

tag-minor:
	$(call tag_version,minor)

tag-major:
	$(call tag_version,major)

tag-list:
	@git tag -l "v*" --sort=-v:refname | head -10

# ── Terraform ─────────────────────────────────────────────────
TF_DIR = infrastructure

tf-init:
	terraform -chdir=$(TF_DIR) init

tf-plan:
	terraform -chdir=$(TF_DIR) plan

tf-apply:
	terraform -chdir=$(TF_DIR) apply

tf-output:
	terraform -chdir=$(TF_DIR) output
