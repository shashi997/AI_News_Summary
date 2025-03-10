const express = require('express')
const getNews = require('../controllers/news.controller.js')
const summarizeNews = require('../controllers/summarize.controller.js')

const router = express.Router()

router.get('/', getNews)

router.post('/summarize', summarizeNews)

module.exports = router