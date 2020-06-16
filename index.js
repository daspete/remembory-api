import express from 'express'

express().get('/', (req, res, next) => {
    res.json({ hello: 'world' })
}).listen(5000)