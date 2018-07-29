const url_metadata = require('url-metadata')

module.exports = {
  get: function (url) {
    url_metadata(url).then(
    function (meta) {
      var meta = {
        title: meta['title'] || meta['og:title'],
        author: meta['author'] || meta['article:author'] || meta['og:article:author'],
        date_published: meta['article:published_time'] || meta['og:article:published_time']
      }

      if (meta.date_published)
        meta.date_published = meta.date_published.substring(0, 10)

      return meta
    },
    function (error) {
      console.error(error)
    })
  }
}
