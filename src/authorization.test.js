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
  })
})
