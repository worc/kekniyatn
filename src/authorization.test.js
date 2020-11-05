import { getAccessToken } from "./authorization";

describe('system setup', () => {
  test('runtime has a client ID and client secret environment variables', () => {
    expect(() => process.env.SPOTIFY_CLIENT_ID !== undefined)
    expect(() => process.env.SPOTIFY_CLIENT_SECRET !== undefined)
  })
})

describe('spotify authorization', () => {
  describe('getAccessToken', () => {
    test('given valid client ID and secret, returns an access token', done => {
      const request = getAccessToken()

      request.then(response => {
        expect(() => response.data.access_token !== undefined)
        expect(() => response.data.expires_in === 3600)
      })

      request.catch(error => {
        console.error(error)
      })

      request.finally(() => {
        done()
      })
    })

    test('given invalid client, returns an error message', done => {
      const request = getAccessToken({
        providedClientId: 'bad client id',
        providedClientSecret: 'bad client secret'
      })

      request.catch(error => {
        expect(() => error.response.status === 400)
        expect(() => error.response.data.error === 'invalid_client')
        expect(() => error.response.data.description === 'Invalid client')
      }).finally(() => {
        done()
      })
    })

    test('given valid client and invalid secret, returns an error message', done => {
      const request = getAccessToken({
        providedClientId: process.env.SPOTIFY_CLIENT_ID,
        providedClientSecret: 'bad client secret'
      })

      request.catch(error => {
        expect(() => error.response.status === 400)
        expect(() => error.response.data.error === 'invalid_client')
        expect(() => error.response.data.description === 'Invalid client secret')
      }).finally(() => {
        done()
      })
    })
  })
})
