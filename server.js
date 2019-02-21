const express = require('express')
const path = require('path')
const app = express()

// import koneksi database
const con=require('./config/db')

// import method override
const methodOverride=require("method-override")

let simpanBiodata = []

// membuat middleware methodOverride
app.use(methodOverride("_method"))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.urlencoded({ extended: true }))

app.get('/', function (req, res) {
    con.query(`select * from biodata`,function(err, rows){
        console.log(rows)
        res.render('tampildata', {
            biodata: rows
        })
    })
})

// route tampil form create
app.get('/create', function (req, res) {
    res.sendFile(__dirname + '/form.html')
})

app.post('/', function (req, res) {
    con.query(`insert into biodata(nama, alamat) values ("${req.body.nama}", "${req.body.alamat}")`)
    // simpanBiodata.push(req.body)
    res.redirect('/')
})

// route untuk delete data
app.delete('/:id', function (req, res) {
    con.query(`delete from biodata where id_biodata="${req.params.id}"`,function(err){
        res.redirect('/')
    })
})

// route untuk menampilkan form edit data
app.get('/:id/edit', function (req, res) {
    con.query(`select * from biodata where id_biodata="${req.params.id}"`, function(err,row){
        res.render('edit', {
            data: row[0],
            index: row[0].id_biodata
        })
    })
})

// route untuk proses update data
app.put('/:id', function (req, res) {
    con.query(`update biodata set nama="${req.body.nama}", alamat="${req.body.alamat}" 
    where id_biodata="${req.params.id}"`, function(err){
        res.redirect('/')
    })
    
})

app.listen(3000, function () {
    console.log("Server berjalan")
})