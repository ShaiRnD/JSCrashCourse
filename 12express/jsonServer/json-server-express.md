# json-server like server using express

## Step 1
Create a json-server like server with the following end-points. the data will be saved in a `db.json` file

The *users* endpoint:

* GET /users - returns all the users in the db `[{id, name},{},...]`
* GET /users/:id - returns the user with the specified id `{id, name}`

* POST /users - creates a new user, generating a new id for it, in sequential order after the last (the user name will be sent in the request body as an object `{name:"somename"}`)

---

User object will look like this:
```js
{ id: 1, name:"Joe"}
```

Post object will look like this:
```js
{ id: 1, userId: 1, text:"Joe's first post"}
```

## Step 2

Add the *posts* endpoint

GET /posts - returns all the posts [{id, userId, text},{},...]
GET /users/:id/posts - returns all the posts for the user with that id
GET /posts/:id - returns the post with that id

POST /users/:id - creates a new post for the user with the specified id. the post id should be sequential to all posts (not user unique)

## Step 3

If an existing db.json file is present, read it as the initial state of the server
