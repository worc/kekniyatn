import express from 'express'
import { getAccessToken } from './authorization.js'

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.status(200).send('Server is running')
})

app.get('/access_token', (req, res) => {
  getAccessToken().then(response => {
    const data =  {
      token: response.data.access_token,
      expires_in: response.data.expires_in,
    }

    res.status(200).send(data)
  }).catch(error => {
    console.error(error)
    res.status(500).send('something went wrong...')
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${ PORT }`)
})
