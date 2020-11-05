import { call, put } from 'redux-saga/effects'
import * as Authorization from "./authorization";

export function * getAccessToken () {
  try {
    const response = yield call(Authorization.getAccessToken)
    yield put({
      type: 'RECEIVED_ACCESS_TOKEN',
      token: response.data.access_token,
      // todo token_expiration: response.data.expires_in + Date.now() ?
    })
  } catch (e) {
    yield put({
      type: 'RECEIVED_ACCESS_TOKEN_FAILED',
      error_type: e.response.data.error,
      error_description: e.response.data.description,
    })
  }
}
