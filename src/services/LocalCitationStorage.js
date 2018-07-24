function setCitationsJSON (input) {
  localStorage.citations = JSON.stringify(input)
}

function getCitationsJSON () {
  try {
    return JSON.parse(localStorage.citations)
  } catch (error) {
    return false
  }
}

export default {
  getAll: function () {
    return getCitationsJSON()
  },

  getByIndex: function (index) {
    return this.getAll()[index]
  },

  removeAll: function () {
    if (window.confirm('Are you sure you want to clear ALL citations?')) {
      this.setCitationJSON(false)
    }
  },

  removeByIndex: function (index) {
    var citations = getCitationsJSON()
    if (citations) {
      if (citations.length === 1) {
        citations = false
      } else {
        citations.splice(index, 1)
      }
    }
    setCitationsJSON(citations)
  },

  add: function (type, meta) {
    var data = {'type': type, 'meta': meta}
    var citations = getCitationsJSON()
    if (citations) {
      citations.push(data)
    } else {
      citations = [data]
    }
    setCitationsJSON(citations)
    return true // sucess
  }
}
