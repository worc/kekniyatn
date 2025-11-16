import axios from 'axios'

export function getAlbums({ artist_id, access_token }: { artist_id: string, access_token: string }) {
  return axios({
    method: 'GET',
    url: `https://api.spotify.com/v1/artists/${ artist_id }/albums`,
    headers: {
      Authorization: `Bearer ${ access_token }`,
    }
  })
}