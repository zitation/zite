'use strict'

const config = require('../config')

process.env.NODE_ENV = 'production'

const express = require('express')

const port = 8080

const app = express()

// serve dynammic assets
require('../src/server.js')(app)

// serve built webpack files
app.use(express.static('./dist'))

const uri = '0.0.0.0:' + port

console.log('URI: ' + uri)

const server = app.listen(port)
