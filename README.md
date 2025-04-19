# boardwall

Create `.env` 
```bash
# SERVER_PORT=8080
DB_HOST=db
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
```

and `.env.dev`
```bash
# SERVER_PORT=8080
DB_HOST=localhost
DB_PORT=8432
DB_USERNAME=postgres
DB_PASSWORD=postgres
```

On usage, run by:

`task build-and-run`

During dev, run by: 

`task run:backend`

`task run:frontend`
