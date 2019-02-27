const express = require('express')
const router = express.Router()
const con=require('../config/db')

const biodataController = require('../controller/biodataController')

router.get('/', biodataController.index)

// route tampil form create
router.get('/create', biodataController.create)

router.post('/', biodataController.store)

// route untuk delete data
router.delete('/:id', biodataController.destroy)

// route untuk menampilkan form edit data
router.get('/:id/edit', biodataController.edit)

// route untuk proses update data
router.put('/:id', biodataController.update)

module.exports = router