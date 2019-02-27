const express = require('express')
const path = require('path')
const app = express()

// import method override
const methodOverride=require("method-override")

let simpanBiodata = []

// membuat middleware methodOverride
app.use(methodOverride("_method"))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.urlencoded({ extended: true }))

app.use('/biodata',require('./routes/biodataRouter'))

app.listen(3000, function () {
    console.log("Server berjalan")
})