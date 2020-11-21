import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import store from './store.js'

import Home from './home.js'


render(
  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ Home }/>
        {/*<Route path='/timeline' component={Timeline}/>*/}
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
