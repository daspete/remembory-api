import 'dotenv/config'

export default {
    // database name
    database: process.env.DB_NAME || 'manablox',
    
    // database host
    host: process.env.DB_HOST || 'localhost',

    protocol: process.env.DB_PROTOCOL || 'mongodb',

    // database access
    user: process.env.DB_USER || 'admin',
    pass: process.env.DB_PASS || 'admin',
    
    // database port
    port: process.env.DB_PORT || 27017,
    
    // database settings
    settings: {
        useUnifiedTopology: true
    },

    // database cache
    cache: {
        enabled: process.env.DB_CACHE == 'false' ? false : true,
        maxMS: parseInt(process.env.DB_CACHE_TIME || '200')
    }
}