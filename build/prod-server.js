'use strict'

const config = require('../config')

process.env.NODE_ENV = 'production'

const express = require('express')

const port = 80

const app = express()

// serve dynammic assets
require('../src/server.js')(app)

// serve built webpack files
app.use(express.static('./dist'))

const uri = 'https://zite-citation.herokuapp.com:' + port

const server = app.listen(port)
