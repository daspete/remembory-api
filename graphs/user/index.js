import * as typeDefs from './schema.graphql'
import resolvers from './resolvers'
import Provider from './provider'

const provider = new Provider()

const graphName = __dirname.split('/').reverse()[0]
const providerName = `${ graphName.substr(0, 1).toUpperCase() + graphName.substr(1).toLowerCase() }Provider`

export default {
    autoload: true,
    typeDefs,
    resolvers,
    context: (ctx) => { 
        const context = { ...ctx }
        context[providerName] = provider

        return context
    },
    imports: []
}
