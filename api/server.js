// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
import routes from "./routes.json"
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// const dataSeeder = require("./seeder")


server.use(middlewares)

// dataSeeder.seedData(router.db);

// Add this before server.use(router)
server.use(jsonServer.rewriter(
    routes
))
server.use(router)

server.listen(3000, () => {
    // console.log(dataSeeder);
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
