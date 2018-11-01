module.exports = function (app) {
  const bodyParser = require('body-parser')
  const cors = require('cors')
  const metaScrape = require('./meta/scrape.js')

  app.use(bodyParser.json())
  app.use(cors())

  app.post('/meta', (request, response) => {
    const url = request.body.url

    if (url) {
      if (url === 'test') {
        const testValues = require('./meta/test_values.js')
        response.json(testValues)
      } else {
        metaScrape.get(url, response)
      }
    }
  })
}
