const express = require('express')
const router = express.Router()
const linkController = require('../controllers/linkController')

router.get('/:title', linkController.redirect)

router.get('/', (req, res) => {
    res.send('ok')
})

router.post('/')

module.exports = router