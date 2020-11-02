import axios from 'axios'

describe('spotify authentication', () => {
  test('has a client ID and client secret environment variables', () => {
    expect(() => process.env.SPOTIFY_CLIENT_ID !== undefined)
    expect(() => process.env.SPOTIFY_CLIENT_SECRET !== undefined)
  })

  test('returns an access token', done => {
    const client_id = process.env.SPOTIFY_CLIENT_ID
    const client_secret = process.env.SPOTIFY_CLIENT_SECRET
    const params = new URLSearchParams()
    params.append('grant_type', 'client_credentials')

    const request = axios({
      method: 'POST',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Authorization': 'Basic ' + (new Buffer(`${ client_id }:${ client_secret }`).toString('base64')),
        'Content-Type':'application/x-www-form-urlencoded',
      },
      data: params,
    })

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
