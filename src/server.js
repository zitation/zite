const bodyParser = require('body-parser')
const cors = require('cors')
const urlMetadata = require('url-metadata')

module.exports = function (app) {
  
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
        urlMetadata(url).then(
        function (meta) {
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
        function (error) {
          console.log(error)
        })
      }
    }
  })

  const { Pool } = require('pg');
  const pool = new Pool({
    connectionString: process.env.HEROKU_POSTGRESQL_CRIMSON_URL,
    ssl: true
  });

  const config = require('../config')

  app.get('/db', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM meta_cache');
      res.send(result);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  });
}

