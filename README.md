# CosmereDB
A fullstack application (with API REST for backend) for search characters, books, etc in some of the books saga Cosmere.
Also have a section where you can save and manage reviews for all the books sagas.

## Screenshots

![GitHub Logo](https://i.imgur.com/zjrB4EP.png)
![GitHub Logo](https://i.imgur.com/QfFLX1r.png)
![GitHub Logo](https://i.imgur.com/mLKLocI.png)

## Getting Started
If NodeJS and MYSQLServer is already installed in your computer, for test this app, you need to run the following:

### In the /api and /client folders:
```
npm install
```
### In the /sql folder:
Here are the SQL scripts for creating the database and tables locally.
Run the queries in schema.sql and data.sql using your DBMS to create and populate the tables.
The queries.sql script just have some queries to test the tables.

## Run the app

### Init the server: (in /api folder)
```
npm run dev
```

### Init the client: (in /client folder)
```
npm start
```

## Built With

* [ReactJS](https://es.reactjs.org/) - The frontend library used
* [SemanticUI REACT](https://react.semantic-ui.com/) - CSS Framework for React
* [NodeJS](https://nodejs.org/es/) - For the backend server (with Express)
* [MySQL](https://www.mysql.com/) - For the backend database
