// TODO update authorization to handle new scope schema in the api

import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'

import { getAccessToken } from '../authorization.sagas'

function getCurrentUserPlaylists (access_token: string) {
  return axios({
    method: 'GET',
    url: 'https://api.spotify.com/v1/me/playlists',
    headers: {
      Authorization: `Bearer ${ access_token }`,
    }
  })
}

export function playlistReducer (state = { playlists: [] }, action: Record<string, any>) {
  switch (action.type) {
    case 'RECEIVED_PLAYLISTS':
      return { ...state, playlists: action.playlists }
    default:
      return state
  }
}

export function * getPlaylists () : (typeof call | typeof put | unknown) {
  const access_token = yield call(getAccessToken)

  try {
    const response = yield call(getCurrentUserPlaylists, access_token)
    const playlists = response.data.items
    yield put({ type: 'RECEIVED_PLAYLISTS', playlists })
  } catch (e) {
    console.error(e)
  }
}

export default function * () {
  yield takeLatest('REQUEST_PLAYLISTS', getPlaylists)
}
