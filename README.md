

## Description

This is a demo project created by André Levy S. Winnikes for a todo application built using Nest.js. It utilizes MariaDB as the database backend.

This project was created following the tutorial by Leo Brito on YouTube. You can find the tutorial on the channel "leobritob".

## Installation



```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# Maria DB Docker install example:
$ docker run --name todo-database -p 3306:3306 -e MARIADB_ROOT_PASSWORD=123 -d mariadb:latest


