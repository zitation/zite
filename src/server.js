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
        urlMetadata(url, {timeout: 5000}).then(
          function (meta) { // success handler
            console.log(meta)
            try {
              var response = {
                title: meta['title'] || meta['og:title'],
                author: meta['author'] || meta['article:author'] || meta['og:article:author'],
                date_published: meta['article:published_time'] || meta['og:article:published_time']
              }

              if (response.date_published)
                response.date_published = response.date_published.substring(0, 10)

              res.json(response)
            }
            catch (e) {
              console.log(e)
            }
          },
          function (error) { // failure handler
            console.log(error)
          })
      }
    }
  })

  console.log('> dynamic js loaded')
}

