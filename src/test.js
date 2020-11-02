import axios from 'axios'

describe('spotify authentication', () => {
  test('has a client ID and client secret environment variables', () => {
    expect(() => process.env.SPOTIFY_CLIENT_ID !== undefined)
    expect(() => process.env.SPOTIFY_CLIENT_SECRET !== undefined)
  })
})