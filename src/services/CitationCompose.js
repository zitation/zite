function website (meta) {
  // remove http/https
  if (meta.url.startsWith('https://')) {
    meta.url = meta.url.slice(8)
  } else if (meta.url.startsWith('http://')) {
    meta.url = meta.url.slice(7)
  }

  return `${meta.author}. ${meta.date_published}. ${meta.title}. Retrieved ${meta.date_accessed}, from ${meta.url}`
}

function book (meta) {
  return `${meta.author}. (${meta.date_published.slice(0, 4)}). ${meta.title}. ${meta.place_of_publication}: ${meta.publisher}`
}

const composers = {
  'website': website,
  'book': book
}

export default {
  composeCitation (data) {
    var type = data.type
    var meta = data.meta
    return composers[type](meta)
  },
  composeInText (data) {
    return `(${data.meta.author}, ${data.meta.date_published.slice(0, 4)})`
  }
}
