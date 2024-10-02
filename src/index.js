import React from 'react'
import ReactDOM from 'react-dom/client'
import './custom.scss'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { filteredProjects, projectCardImages } from './config'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <App
      filteredProjects={filteredProjects}
      projectCardImages={projectCardImages}
    />
  </Provider>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()
