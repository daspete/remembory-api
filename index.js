import DataProvider from '~~/services/mongodb/dataprovider'
import ExpressService from '~~/services/express'
import ExpressRouter from '~~/services/express/router'

import databaseConfig from '~~/config/database'
import expressConfig from '~~/config/express'


const server = new ExpressService(expressConfig)

// create router
const routes = []
const routeFiles = require.context('./routes', true, /\.js$/)
routeFiles.keys().map((key) => { routes.push({ name: key, route: routeFiles(key).default }) })
const router = new ExpressRouter(server)
router.AddRoutes(routes)


// Start process
const StartServer = async () => {
    const dataprovider = new DataProvider({
        collection: 'membories'
    })

    // new AuthService(authConfig)
    // const graphql = new GraphQLService({ ...graphqlConfig, server, graphs })

    // server.Use(passport.initialize())

    server.Use('/healthcheck', (req, res, next) => {
        res.json({
            up: true
        }) 
    })

    server.Get('/', async (req, res, next) => {
        let membories = await dataprovider.Find()

        res.json(membories)
    })

    // graphql.Start()
    server.Start()
}

StartServer()



// import ExpressService from '~~/services/express'
// // import GraphQLService from 'manablox-service-graphql'

// import Router from '~~/services/express/router'

// import serverConfig from '~~/config/server'
// // import graphqlConfig from '~~/config/graphql'

// // initialize express server
// const server = new ExpressService(serverConfig)

// // create router
// const routes = []
// const routeFiles = require.context('./routes', true, /\.js$/)
// routeFiles.keys().map((key) => { routes.push({ name: key, route: routeFiles(key).default }) })
// const router = new Router(server)
// router.AddRoutes(routes)


// // let graphs = []
// // const graphFiles = require.context('./graphs', true, /index\.js$/)
// // graphFiles.keys().map((key) => { graphs.push({ name: key.split('/').reverse()[1], module: graphFiles(key).default }) })

// // graphs = graphs.filter((graph) => { return graph.module.autoload == true })


// // async server start
// const StartServer = async () => {
//     // const graphql = new GraphQLService({ ...graphqlConfig, server, graphs })
    
//     // graphql.Start()
//     server.Start()
// }

// StartServer()