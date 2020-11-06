import { call, put, takeLatest } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm.js'
import axios from 'axios'

// todo parameterize url:
export const request = () => {
  return axios.request({
    method: 'GET',
    url: 'http://localhost:3000/access_token',
  }).catch(error => {
    console.error(error)
  })
}

export function * getAccessToken () {
  // todo check redux for live token and return that?
  try {
    const response = yield call(request)
    const token = response.data.token
    yield put({
      type: 'RECEIVED_ACCESS_TOKEN',
      token,
      // todo token_expiration: response.data.expires_in + Date.now() ?
    })
    return token
  } catch (e) {
    yield put({
      type: 'RECEIVED_ACCESS_TOKEN_FAILED',
      error_type: e.response.data.error,
      error_description: e.response.data.description,
    })
  }
}

export default function * () {
  yield takeLatest('REQUEST_ACCESS_TOKEN', getAccessToken)
}
