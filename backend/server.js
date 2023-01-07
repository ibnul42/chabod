const express = require('express')
const dotenv = require('dotenv').config()
const color = require('colors')
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')

connectDB()

const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goal', require("./routes/goalRoutes"))
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})