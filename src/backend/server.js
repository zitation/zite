module.exports = function (app) {
  const bodyParser = require('body-parser')
  const cors = require('cors')
  const urlMetadata = require('url-metadata')
  const meta_scrape = require('./meta/scrape.js')
  app.use(bodyParser.json())
  app.use(cors())

  app.post('/meta', (req, res) => {
    const url = req.body.url

    if (url) {
      if (url === 'test') {
        var test_values = require('./meta/test_values.js')
        res.json(test_values)
      }
      else {
        meta_scrape.get(url, res)
      }
    }
  })
}

