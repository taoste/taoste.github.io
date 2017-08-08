default: help
.PHONY: default

help:
	@echo Usage:
	@echo '	'make
	@echo '	'make help
	@echo '	'make build
	@echo '	'make serve
	@echo '	'make view
.PHONY: help

build:
	@php index.php > index.html
.PHONY: build

# http://php.net/manual/en/features.commandline.webserver.php
serve:
	@php -S localhost:8080
.PHONY: serve

view:
	@firefox http://localhost:8080
.PHONY: view
