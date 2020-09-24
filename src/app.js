import express from 'express'
import path from 'path'
import routes from './routes'

const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use('/', routes);

app.use(
  express.static(path.join(__dirname, '../', 'public'), { maxAge: 31557600000 })
)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
