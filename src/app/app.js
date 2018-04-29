import React from 'react'
import { Provider } from 'react-redux'
import StyledApp from './app.styled'
import { store } from './create-store'
import 'pure-css'

const App = () => (
  <Provider {...{ store }}>
    <StyledApp>app</StyledApp>
  </Provider>
)

export default App
