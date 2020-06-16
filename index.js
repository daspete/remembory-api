import 'dotenv/config'
import express from 'express'

express().get('/', (req, res, next) => {
    res.json({ hello: 'world' })
}).listen(process.env.PORT, '0.0.0.0')