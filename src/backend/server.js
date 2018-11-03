module.exports = function (app) {
  const bodyParser = require('body-parser')
  const cors = require('cors')
  const metaScrape = require('./meta/scrape.js')

  app.use(bodyParser.json())
  app.use(cors())

  app.post('/meta', (request, response) => {
    const url = request.body.url

    if (url) {
      metaScrape.get(url, response)
    }
  })
}
