# json-server using mysql

continue the json-server exercise and replace the db.json file with a mysql database

### instructions
* no need to use `fs` anymore. use `mysql` instead!
* all rest api end points should stay the same
* the id's should be retrieved from the database after insertion. (use auto increment fields for users, and posts)
* the server should be executed using `npm start`

### server file structure
/node_modules  
/routes/posts.js  
/routes/users.js  
app.js  
package.json  

use express router and create a different router for `posts` end points and `users` end points

# challanges
* using the `morgan` npm package. log every error on the server to a `server.log` file
* replace the `mysql` package with `promise-mysql` and use promises instead of callbacks whenever possible