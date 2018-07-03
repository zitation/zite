const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const urlMetadata = require('url-metadata')

const app = express()
app.use(bodyParser.json())
app.use(cors())
// app.use('/', express.static(__dirname + '/public/dist'));

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

app.listen(process.env.PORT || 8081)
console.log('server started.')
