const router = require('express').Router()

const servicesOpenAi = require('./services.openai')

router.post('/chat',servicesOpenAi.answerToAi)
router.post('/generation-img',servicesOpenAi.imgCreate)

module.exports = router