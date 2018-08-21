var formats = require('./formats.js')

export default {
  citation: function (format, data) {
    return formats.default[format].default[data.type](data.meta)
  },
  inText: function (data) {
    return `(${data.meta.author}, ${data.meta.date_published.year})`
  }
}
