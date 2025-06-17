const routes = require('./route/api/route')
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.use(
    express.urlencoded({
        extended: true
    })
)

app.listen(8081, function () {
    console.log("Servidor no http://localhost:8081")
})
