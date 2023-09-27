const jsonServer = require('json-server')
const seedData = require("../seedData")
const routes = require("./routes.json")
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.rewriter(
    routes
))
server.use(router)

server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
