import axios from "axios";

export function getAccessToken () {
  const client_id = process.env.SPOTIFY_CLIENT_ID
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET
  const params = new URLSearchParams()
  params.append('grant_type', 'client_credentials')

  return axios({
    method: 'POST',
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer(`${ client_id }:${ client_secret }`).toString('base64')),
      'Content-Type':'application/x-www-form-urlencoded',
    },
    data: params,
  })
}
