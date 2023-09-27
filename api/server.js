// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
import routes from "./routes.json"
import seedData from "../seedData"
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()



server.use(middlewares)


// Add this before server.use(router)
server.use(jsonServer.rewriter(
    routes
))
server.use(router)

seedData()

server.listen(3000, () => {
    // console.log(dataSeeder);
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
