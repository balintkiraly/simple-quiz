import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import routes from './routes'
import { APP_PORT } from './config/environment'

const app = express()

app.use(
  express.static(path.join(__dirname, '../', 'public'), {
    maxAge: 31557600000,
  }),
)

app.use(cookieParser())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('*', (req, _res, next) => {
  // TODO: It's not just a cookie in real life
  app.locals.isLoggedIn = parseInt(req.cookies['isLoggedIn'])
  next()
})
app.use('/', routes)

app.listen(APP_PORT, () => {
  console.log(`App listening at http://localhost:${APP_PORT}`)
})
