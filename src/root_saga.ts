import { all } from 'redux-saga/effects'

import authorizationSagas from './authorization.sagas'
import artistSagas from './artist.sagas'

export default function * rootSaga () {
  yield all([
    authorizationSagas(),
    artistSagas(),
  ])
}
