//* Variables de Entorno
require("dotenv").config();


//> Dependencies AI
const { Configuration, OpenAIApi } = require('openai')

const configuration = new Configuration({
    //apiKey: process.env.OPEN_AI_KEY,
    apiKey: "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"

});

const openai = new OpenAIApi(configuration);

module.exports = openai