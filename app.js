const express = require('express')
const app = express()
const PORT = 3000
const mongoose = require('mongoose')
const linkRouter = require('./routes/linkRoute')

mongoose.connect('mongodb://localhost/newlinks')
let db = mongoose.connection;

db.on('error', () => { console.log('houve um erro') })
db.once('open', () => {
    console.log('banco carregado')

})

app.use('/', linkRouter)

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})