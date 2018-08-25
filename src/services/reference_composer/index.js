var formats = require('./formats/')

export default function (data, options) {
  return formats.default[options.format].default[options.type][data.type](data.meta)
}
