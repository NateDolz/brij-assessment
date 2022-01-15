import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import UrlMap from './UrlMap'

const server = express()
const port = 3030

const hashMap = new UrlMap<string>()
const baseUrl = 'http://localhost:3030/url/'

const shortenUrl = (url: string): string => {
  const shortenedUrl = hashMap.setItem(url, url)
  return baseUrl + shortenedUrl
}

const getUrl = (uuid: string): string => hashMap.getItem(uuid)

server.listen(port, () => {
  console.info('server listening on port 3030')
})

server.use(bodyParser.json())

server.get('/status', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' })
})

server.post(
  '/shorten',
  (
    request: Request<object, ShortenRequest, ShortenRequest>,
    response: Response
  ) => {
    if (!request.body.url) {
      response.status(422).json({
        status: 'bad request, must provide a url',
      })
    }
    const newUrl = shortenUrl(request.body.url)
    response.status(200).json({ url: newUrl })
  }
)

server.get('/url/:url', (req: Request, res: Response) => {
  console.log(req.params.url)
  const redirect = getUrl(req.params.url)
  console.log(redirect)
  if (!redirect) {
    res.status(404).json({ status: 'url not found' })
  } else {
    res.redirect(redirect)
  }
})
