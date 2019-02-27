const biodata = require('../model/Biodata')
const path = require('path')

module.exports = {
    index(req, res) {
        biodata.get(function (err, rows) {
            res.render('tampildata', {
                biodata: rows
            })
        })
    },
    show(req, res) {
        biodata.getById(req.params.id, function(err, rows){
            res.send("gk ada view nya")
        })
    },
    create(req, res) {
        res.sendFile(path.resolve('form.html'))
    },
    store(req, res) {
        let data = req.body
        biodata.create(data, res.redirect('/biodata'))
    },
    edit(req, res) {
        biodata.getById(req.params.id, function (err, row) {
            res.render('edit', {
                data: row[0],
                index: row[0].id_biodata
            })
        })
    },
    update(req, res) {
        let data = req.body
        biodata.update(req.params.id, data, res.redirect('/biodata'))
    },
    destroy(req, res){
        biodata.destroy(req.params.id, res.redirect('/biodata'))
    }
}