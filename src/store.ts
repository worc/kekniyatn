import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './root_saga'
import { accessToken } from "./authorization.reducer"
import { artistDebug } from "./artist_debug";
import { playlistReducer } from './sagas/playlist_sagas';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  accessToken,
  artistDebug,
  playlistReducer,
})

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
  ) // second argument here can apply middleware

sagaMiddleware.run(rootSaga)

export default store
