const url_metadata = require('url-metadata')

module.exports = {
  get: function (url, response) {
    url_metadata(url).then(
    function (meta) {
      var filtered_meta = {
        title: meta['title'] || meta['og:title'],
        author: meta['author'] || meta['article:author'] || meta['og:article:author'],
        date_published: meta['article:published_time'] || meta['og:article:published_time']
      }

      response.json(filtered_meta)
    },
    function (error) {
      console.error(error)
    })
  }
}
