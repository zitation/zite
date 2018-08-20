module.exports = function (app) {
  const bodyParser = require('body-parser')
  const cors = require('cors')
  const urlMetadata = require('url-metadata')
  const meta_scrape = require('./meta_scrape.js')
  app.use(bodyParser.json())
  app.use(cors())

  app.post('/meta', (req, res) => {
    const url = req.body.url

    if (url) {
      if (url === 'test') {
        var response = {}
        response.title = 'Happy Little Trees'
        response.author = 'Bob Ross'
        response.date_accessed = '2018-01-01'
        response.date_published = '1983-01-11'
        res.json(response)
      }
      else {
        meta_scrape.get(url, res)
      }
    }
  })
}

