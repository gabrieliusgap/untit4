const express = require('express')
const cors = require("cors")
const app = express()
const mainRouter = require('./routes/router')
const mongoose = require('mongoose')
require('dotenv').config()
app.listen(3030)
app.use(cors())
app.use(express.json())


mongoose.connect(process.env.MONGO_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then( () => {
        console.log('Connection was successful')
    })
    .catch(e => {
        console.log('Error while connecting to db')
        console.log(e)
    })

app.use(['/'], mainRouter)