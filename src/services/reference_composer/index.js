var formats = require('./formats/')

export default {
  citation: function (format, data) {
    return formats.default[format].default.citation[data.type](data.meta)
  },
  inText: function (format, data) {
    return formats.default[format].default.inText[data.type](data.meta)
  }
}
