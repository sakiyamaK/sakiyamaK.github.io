.PHONY: install dev build deploy release

install:
	npm install

dev:
	npm run dev

build:
	npm run build

release: build
	git add .
	git diff --quiet && git diff --staged --quiet || (git commit -m "deploy" && git push)