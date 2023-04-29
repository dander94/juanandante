include .env

build:
	@echo "Building docker containers..."
	@docker-compose -f docker-compose.yml -f ${DOCKER_COMPOSE_FILE} build --no-cache

logs:
	@docker logs juanandante-${name}-1

manage:
	@echo "manage.py ${ARGS}..."
	@docker exec -it juanandante-backend-1 python manage.py ${ARGS}

makemigrations:
	@echo "Making migrations..."
	@docker exec -it juanandante-backend-1 python manage.py makemigrations

migrate:
	@echo "Migrate..."
	@docker exec -it juanandante-backend-1 python manage.py migrate

shell:
	@echo "Django Shell"
	@docker exec -it juanandante-backend-1 python manage.py shell

start:
	@echo "Running project..."
	@docker-compose -f docker-compose.yml -f ${DOCKER_COMPOSE_FILE} up -d

stop:
	@echo "Stopping project..."
	@docker-compose -f docker-compose.yml -f ${DOCKER_COMPOSE_FILE} down --remove-orphans

ssh:
	@echo "SSH juanandante-${name}-1..."
	@docker exec -it juanandante-${name}-1 /bin/bash
