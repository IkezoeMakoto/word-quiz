.env:
	@cp .env.example .env

up: .env
	docker-compose up -d
.PHONY: up

down:
	docker-compose down
.PHONY: down

deploy/prod:
	git pull origin master
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d