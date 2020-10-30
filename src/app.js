import express from 'express'
import path from 'path'
import routes from './routes'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

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

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
