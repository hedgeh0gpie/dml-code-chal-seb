const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const djinniRouter = require('./routes/djinniRoutes')

const app = express()

// MIDDLEWARE
app.use(cors())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString()
  next()
})

// ROUTES
app.use('/api/v1/djinn', djinniRouter)

module.exports = app
