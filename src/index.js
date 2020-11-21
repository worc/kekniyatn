import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import store from './store.js'

import Home from './home.js'
import Timeline from './timeline.js'

render(
  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ Home }/>
        <Route path='/timeline' component={Timeline}/>
      </Switch>
      <footer>
        <Link to='/'>Home</Link>
        <Link to='/timeline'>Timeline</Link>
      </footer>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
