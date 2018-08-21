module.exports = function (app) {
  const bodyParser = require('body-parser')
  const cors = require('cors')
  const urlMetadata = require('url-metadata')
  const meta_scrape = require('./meta/scrape.js')

  app.use(bodyParser.json())
  app.use(cors())

  app.post('/meta', (request, response) => {
    const url = request.body.url

    if (url) {
      if (url === 'test') {
        const test_values = require('./meta/test_values.js')
        response.json(test_values)
      }
      else {
        meta_scrape.get(url, response)
      }
    }
  })
}

