import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import store from './store'

import Home from './home'
import Timeline from './timeline'

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement)

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`

root.render(
  <Provider store={ store }>
    <GlobalStyle/>
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
  </Provider>
)
