import Hapi from 'hapi'
import Joi from 'joi'
import handlers from './handlers'

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ port: 3000 })

server.route({
    method: 'GET',
    path: '/',
    handler: handlers.default.get
})

server.route({
    method: 'GET',
    path: '/api/v1/marvel/comics/{limit?}',
    handler: handlers.marvels.getCommics
})

server.route({
    method: 'GET',
    path: '/api/v1/marvel/hero/{name?}',
    handler: handlers.marvels.getHero
})

// Start the server
server.start(err => {
    if (err) throw err
    console.log('Server running at:', server.info.uri)
})