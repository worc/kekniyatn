import { call, put, takeLatest } from 'redux-saga/effects'
import * as Artist from './artist'
import { ARTIST_DEBUG_TYPES } from './artist_debug'
import { getAccessToken } from './authorization.sagas'

export function * getAlbums (message: Record<string, any>) : (typeof call | unknown) {
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