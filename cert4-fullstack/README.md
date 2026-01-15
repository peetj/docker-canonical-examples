# Cert IV – Full Stack Web Application

A canonical full-stack example for Cert IV IT.

This example includes:
- Frontend (static site)
- REST API (Node.js)
- Database (MongoDB)

Docker is used only to start and connect the services.

---

## Run

From this folder:
docker compose up -d

---

## View in browser

Frontend:
- http://localhost:8080

API:
- http://localhost:8081/api/tasks

---

## Stop and reset

docker compose down -v


---

## What this example demonstrates

- Multiple services running together
- Frontend calling a REST API
- API using a database
- Service-to-service communication using service names

