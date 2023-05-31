//* Variables de Entorno
require("dotenv").config();


//> Dependencies AI
const { Configuration, OpenAIApi } = require('openai')

//> Api key for Access OpenAi
const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY
});

const openai = new OpenAIApi(configuration);

module.exports = openai