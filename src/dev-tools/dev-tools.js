import React from 'react'

function install() {
  function DevTools() {
    return <h1>Hi from the DevTools</h1>
  }
  //add dev tools UI to the page
  const devToolsRoot = document.createElement('div')
  document.body.appendChild(devToolsRoot)
  ReactDOM.render(<DevTools />, devToolsRoot)
}

export { install }
