# json-server using mysql

Continue the json-server exercise and replace the db.json file with a mysql database

## Instructions
* No need to use `fs` anymore. use `mysql` instead!
* All rest api end points should stay the same
* The id's should be retrieved from the database after insertion. (use auto increment fields for users, and posts)
* The server should be executed using `npm start`

## Server file structure
* /node_modules  
* /routes/posts.js  
* /routes/users.js  
* app.js  (or server.js)
* package.json  

Use express router and create a different router for `posts` end points and `users` end points

# Challanges
* Using the `morgan` npm package. log every failed request on the server to an `error.log` file
* Make sure your db queries are injection proof
* Replace the `mysql` package with `promise-mysql` and use promises instead of callbacks whenever possible