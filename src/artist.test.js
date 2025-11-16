import { getAccessToken } from "./authorization";
import { getAlbums } from "./artist.js";

describe('artist api request', () => {
  describe('albums', () => {
    test('given an artist id and valid access token, returns albums', done => {
      getAccessToken().then(response => {
        const access_token = response.data.access_token
        getAlbums({
          artist_id: '1SlPJ2l80sMnCHpz1wB8nT', // blue scholars
          access_token,
        }).then(response => {
          expect(() => response.data.items.length > 0)
        }).catch(error => {
          console.error(error)
          done(error)
        }).finally(() => {
          done()
        })
      })
    })
  })
})
