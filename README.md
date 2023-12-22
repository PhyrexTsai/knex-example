# Knex Example

## Document
Link: [https://knexjs.org/guide/](https://knexjs.org/guide/)

## Introduce
Using `knex` for `mysql` schema version control.

## Setup
```sh
npm i
```

#### Knex Setup
Create a `knexfile.js` to set database environment.  
Put the configuration to `.env.{environment}`

## Commands

Create a migration file, this will create a `file` under `migrations` folder
```sh
npx knex migrate:make create_user_table 
```

Run to latest schema
```sh
# set to the latest version with --env for environment
npx knex migrate:latest --env development

NODE_ENV=development knex migrate:latest
```

Upgrade schema
```sh
npx kenx migrate:up {file_name}
```

Downgrade schema
```sh
npx knex migrate:down {file_name}
```

List all migration
```sh
npx knex migrate:list
```

Rollback
```sh
# Rollback all migrations
knex migrate:rollback --all

# Rollback the last batch of migration
knex migrate:rollback
```