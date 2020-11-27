import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import flash from 'connect-flash'
import session from 'express-session'
import routes from './routes'
import { APP_PORT } from './config/environment'

const app = express()

app.use(cookieParser('secret'))
app.use(session({ cookie: { maxAge: 60000 } }))
app.use(
  express.static(path.join(__dirname, '../', 'public'), {
    maxAge: 31557600000,
  }),
)

app.use(flash())

app.use((req, res, next) => {
  res.locals.success = req.flash('success')
  res.locals.info = req.flash('info')
  res.locals.error = req.flash('error')
  res.locals.user = req.user || null
  next()
})

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)
app.use(bodyParser.json())
app.use(
  express.json({
    type: ['application/json', 'text/plain'],
  }),
)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('*', (req, _res, next) => {
  app.locals.isLoggedIn = !!req.session.user
  app.locals.currentUser = req.session.user
  next()
})
app.use('/', routes)

app.listen(APP_PORT, () => {
  console.log(`App listening at http://localhost:${APP_PORT}`)
})
