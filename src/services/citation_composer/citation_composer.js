var formats = require('./formats.js')

export default {
  citation: function (data) {
    return formats.default['apa'].default[data.type](data.meta)
  },
  inText: function (data) {
    return `(${data.meta.author}, ${data.meta.date_published.year})`
  }
}
