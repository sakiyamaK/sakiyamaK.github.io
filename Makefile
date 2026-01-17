.PHONY: install dev build deploy release

install:
	npm install

dev:
	npm run dev

build:
	npm run build

release:
	@if [ -n "$$(git status --porcelain)" ]; then \
		echo "Error: Uncommitted changes found. Please commit your changes before releasing."; \
		exit 1; \
	fi
	npm run build
	git add .
	git diff --quiet && git diff --staged --quiet || (git commit -m "deploy" && git push)