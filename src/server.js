module.exports = function (app) {
  const bodyParser = require('body-parser')
  const cors = require('cors')
  const urlMetadata = require('url-metadata')
  app.use(bodyParser.json())
  app.use(cors())

  app.post('/meta', (req, res) => {
    const url = req.body.url
    console.log(url)
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
        urlMetadata(url).then(
          function (m) { // success handler
            console.log(m)

            response = {
              title: m['title'] || m['og:title'] || m[''],
              author: m['author'] || m['article:author'] || m['og:article:author'],
              date_published: m['article:published_time'].substring(0, 10) || m['og:article:published_time'].substring(0, 10)
            }
            res.json(response)
          },
          function (error) { // failure handler
            console.log(error)
          })
      }
    }
  })

  console.log('> dynamic js loaded')
}

