import { call, put, takeLatest } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm.js'
import * as Artist from './artist.js'
import { ARTIST_DEBUG_TYPES } from './artist_debug.js'
import { getAccessToken } from './authorization.sagas.js'

export function * getAlbums (message) {
  const access_token = yield call(getAccessToken)
  try {
    const response = yield call(Artist.getAlbums, { artist_id: message.artist_id, access_token })
    const albums = response.data.items
    console.log('albums from request', albums)
    yield put({ type: ARTIST_DEBUG_TYPES.RECEIVED_ALBUMS, albums })
  } catch (e) {
    console.error(e)
  }
}

export default function * () {
  yield takeLatest(ARTIST_DEBUG_TYPES.REQUEST_ALBUMS, getAlbums)
}