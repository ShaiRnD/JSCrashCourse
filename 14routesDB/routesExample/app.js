const express = require('express')
const usersRoutes = require('./routes/users')
const productsRoutes = require('./routes/products')
const app = express()

app.use(usersRoutes)
app.use(productsRoutes)

app.get('/', function () {

})

app.listen(3000, () => console.log("started server..."))


