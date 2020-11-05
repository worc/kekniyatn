import { call, put } from 'redux-saga/effects'
import * as Sagas from "./authorization.sagas";
import * as API from './authorization'

describe('Authorization sagas', () => {
  describe('getAccessToken *', () => {
    test('success', () => {
      const generator = Sagas.getAccessToken()
      const callStep = generator.next().value
      expect(callStep).toEqual(call(API.getAccessToken))

      const testResponse = {
        data: {
          access_token: 'test-token',
          expires_in: 3600,
        }
      }
      const putStep = generator.next(testResponse).value
      expect(putStep).toEqual(put({
        type: 'RECEIVED_ACCESS_TOKEN',
        token: testResponse.data.access_token,
      }))
    })

    test('error', () => {
      const generator = Sagas.getAccessToken()
      const callStep = generator.next().value
      expect(callStep).toEqual(call(API.getAccessToken))

      const testError = {
        response: {
          data: {
            error: 'test error',
            error_description: 'test description',
          }
        }
      }
      const putStep = generator.throw(testError).value
      expect(putStep).toEqual(put({
        type: 'RECEIVED_ACCESS_TOKEN_FAILED',
        error_type: testError.response.data.error,
        error_description: testError.response.data.description,
      }))
    })
  })
})
