// import fs from 'fs'
// import { fileURLToPath } from 'url'
// import path, { dirname } from 'path'
// import https from 'https'
import 'dotenv/config'
import express from 'express'
import { getAccessToken } from './authorization.js'

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const key = fs.readFileSync(path.join(__dirname, './devkey.pem'))
// const cert = fs.readFileSync(path.join(__dirname, './devcert.pem'))

const app = express()
// const server = https.createServer({ key, cert }, app)
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

    res.append('Access-Control-Allow-Origin', '*')
    res.status(200).send(data)
  }).catch(error => {
    console.error(error)
    res.status(500).send('something went wrong...')
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${ PORT }`)
})

// server.listen(PORT, () => {
//   console.log(`Server listening on port ${ PORT }`)
// })
