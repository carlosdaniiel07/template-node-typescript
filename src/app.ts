import express from 'express'

import routes from './routes'
import errorHandler from './middlewares/errorHandler'

const app = express()
const router = express.Router()

routes.forEach(route => route(router))

app.use(express.json())
app.use(router)
app.use(errorHandler())

export default app
