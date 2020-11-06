import { all } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm.js'

import authorizationSagas from './authorization.sagas.js'
import artistSagas from './artist.sagas.js'

export default function * rootSaga () {
  yield all([
    authorizationSagas(),
    artistSagas(),
  ])
}
