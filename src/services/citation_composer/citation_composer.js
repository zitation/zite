const formats = {
  'apa': require('./formats/apa.js')
}

export default {
  citation: function (data) {
    return formats['apa'].default[data.type](data.meta)
  },
  inText: function (data) {
    return `(${data.meta.author}, ${data.meta.date_published.year})`
  }
}
