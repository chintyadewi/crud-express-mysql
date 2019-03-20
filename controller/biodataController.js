const Biodata = require('../model/Biodata')
const path = require('path')

module.exports = {
    index: function(req, res) {
        Biodata.findAll().then(function (rows) {
            res.render('tampildata', {
                biodata: rows
            })
        })
    },
    create:function(req, res) {
        res.sendFile(path.resolve('form.html'))
    },
    store:function(req, res) {
        Biodata.create(req.body).then(function(){
            res.redirect('/biodata')
        })
    },
    edit:function(req, res) {
        Biodata.findByPk(req.params.id).then(function(row) {
            res.render('edit', {
                data: row,
                index: row.id_biodata
            })
        })
    },
    update:function(req, res) {
        Biodata.findByPk(req.params.id).then(function(row){
            row.update(req.body)
            .then(() => res.redirect('/biodata'))
        })
    },
    destroy:function(req, res){
        Biodata.findByPk(req.params.id).then(function(row){
            row.destroy()
            res.redirect('/biodata')
        })
    },
    show:function(req, res) {
        biodata.findByPk(req.params.id).then(function(row){
            res.send("gk ada view nya")
        })
    }
}