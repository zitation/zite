function getDateComponentsFromString (dateString) {
  var date = new Date(dateString)

  return {
    date: date.getDate(),
    month: date.getMonth(),
    monthName: date.toLocaleString('en-us', { month: 'long' }),
    year: date.getFullYear()
  }
}

export default {
  citation: {
    website: function (meta) {
      // remove http/https
      let url = meta.url
      if (meta.url.startsWith('https://')) {
        url = meta.url.slice(8)
      } else if (meta.url.startsWith('http://')) {
        url = meta.url.slice(7)
      }

      var datePublished = getDateComponentsFromString(meta.date_published)
      var dateAccessed = getDateComponentsFromString(meta.date_accessed)

      return `${meta.author[0].name}. (${datePublished.year}). ${meta.title}. Retrieved ${dateAccessed.monthName} ${dateAccessed.date}, ${dateAccessed.year}, from ${url}`
    },
    book: function (meta) {
      var datePublished = getDateComponentsFromString(meta.date_published)

      return `${meta.author[0].name}. (${datePublished.year}). ${meta.title}. ${meta.location}: ${meta.publisher}`
    }
  },
  inText: {
    website: function (meta) {
      return `(${meta.author[0].name}, ${meta.date_published.year})`
    },
    book: function (meta) {
      return `(${meta.author[0].name}, ${meta.date_published.year})`
    }
  }
}
