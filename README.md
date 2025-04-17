# boardwall

Create `.env` 
```bash
SERVER_PORT=8080
JDBC_DB_URL=jdbc:postgresql://db:5432/boardwall?useSSL=false&serverTimezone=UTC
DB_USERNAME=postgres
DB_PASSWORD=postgres
```

and `.env.dev`
```bash
SERVER_PORT=8080
JDBC_DB_URL=jdbc:postgresql://localhost:8432/boardwall?useSSL=false&serverTimezone=UTC
DB_USERNAME=postgres
DB_PASSWORD=postgres
```

On usage, run by:

`task build-and-run`

During dev, run by: 

`task run:backend`

`task run:frontend`
