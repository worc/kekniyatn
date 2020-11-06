import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store.js'

import TokenDebug from './token_debug.js'

render(
  <Provider store={ store }>
    <h1>hello world</h1>
    <TokenDebug/>
  </Provider>,
  document.getElementById('app')
)
