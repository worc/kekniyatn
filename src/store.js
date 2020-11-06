import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './root_saga.js'
import { accessToken } from "./authorization.reducer.js"

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  accessToken,
})

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
  ) // second argument here can apply middleware

sagaMiddleware.run(rootSaga)

export default store
