const router = require('express').Router()

const servicesOpenAi = require('./services.openai')

router.post('/chat',servicesOpenAi.answerToAi)
router.post('/generation-img',servicesOpenAi.imgCreate)
router.post('/jsgenerate',servicesOpenAi.jsGenerated)

module.exports = router