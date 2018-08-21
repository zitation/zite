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
  website: function (meta) {
    // remove http/https
    if (meta.url.startsWith('https://')) {
      meta.url = meta.url.slice(8)
    } else if (meta.url.startsWith('http://')) {
      meta.url = meta.url.slice(7)
    }

    var datePublished = getDateComponentsFromString(meta.date_published)
    var dateAccessed = getDateComponentsFromString(meta.date_accessed)

    return `${meta.author}. (${datePublished.year}). ${meta.title}. Retrieved ${dateAccessed.monthName} ${dateAccessed.date}, ${dateAccessed.year}, from ${meta.url}`
  },
  book: function (meta) {
    var datePublished = getDateComponentsFromString(meta.date_published)

    return `${meta.author}. (${datePublished.year}). ${meta.title}. ${meta.place_of_publication}: ${meta.publisher}`
  }
}