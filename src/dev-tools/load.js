function loadDevTools(callback) {
  const expicitlyDisabled =
    window.location.search.includes('dev-tools=false') ||
    window.localStorage.getItem('dev-tools') === 'false'

  const explicitlyEnabled =
    window.location.search.includes('dev-tools=true') ||
    window.localStorage.getItem('dev-tools') === 'false'

  if (
    !explicityDisabled &&
    (process.env.NODE_ENV === 'development' || explicitlyEnabled)
  ) {
    import('.dev-tools')
      .then(devTools => devTools.install())
      .finally(callback)
  } else {
    callback()
  }
}

export default loadDevTools
