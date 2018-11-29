function isSecretBrowse () {
  try {
    window.localStorage.setItem('test', '1')
    window.localStorage.removeItem('test')
    return false
  } catch (err) {
    return true
  }
}
export const getItem = function (key, defaultValue) {
  if (!key) {
    return defaultValue
  }

  if (isSecretBrowse()) return

  let value = window.localStorage.getItem(key)

  if (!value) {
    return defaultValue
  }

  if (value === 'false') {
    return false
  } else if (value === 'true') {
    return true
  }
  return value
}

export const setItem = function (key, val) {
  if (!key) return

  if (isSecretBrowse()) return
  if (typeof val === 'object') {
    val = JSON.stringify(val)
  }
  console.log(val)
  return window.localStorage.setItem(key, val)
}

export const removeItem = function (key) {
  if (!key) {
    return
  }
  if (isSecretBrowse()) {
    return
  }
  window.localStorage.removeItem(key)
}

export const clear = function (key) {
  if (!key) {
    return
  }
  if (isSecretBrowse()) {
    return
  }
  window.localStorage.clear(key)
}
