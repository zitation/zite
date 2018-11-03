const urlMetadata = require('url-metadata')

module.exports = {
  get: function (url, response) {
    urlMetadata(url).then(
      function (meta) {
        let date = new Date(meta['article:published_time'] || meta['og:article:published_time'])

        const bibjson = {
          'type': meta['og:type'],
          'title': meta['title'] || meta['og:title'],
          'author': [{'name': meta['author'] || meta['article:author'] || meta['og:article:author']}],
          'date': date
        }

        response.json(bibjson)
      },
      function (error) {
        console.error(error)
      })
  }
}
