# Cert III - Static Website (nginx)

A minimal static website served from a container. This is intended as a fast, canonical example teachers can run instantly inside an Azure Lab VM.

## Run

From this folder:

```bash
docker compose up -d

### Run the site

From this folder:
docker compose up -d

### Stop

To stop the container:
docker compose down

To stop and remove all containers, networks and volumes created by this example
docker compose down -v

### Where to edit

site/index.html
site/styles.css

### URL

http://localhost:8080