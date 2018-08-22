function set (key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

function get (key) {
  try {
    var data = JSON.parse(localStorage.getItem(key))
    if (data === null) {
      data = []
    }
    return data
  } catch (error) {
    return []
  }
}

export default {
  set,
  get
}
