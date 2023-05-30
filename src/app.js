//* Dependencies
const express = require('express') //Framework
const os = require('os') //SystemInfo
//* Variables de Entorno
require("dotenv").config();

//> Dependencies AI
const {Configuration, OpenAIApi} = require('openai')

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY,

});

const openai = new OpenAIApi(configuration);



//? ejecute Express
const app = express();

//? use type json
app.use(express.json());



app.post("/find-complexity", async (req, res) => {
    try {
      const { prompt } = req.body;
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `
                ${prompt}
        
                The time complexity of this function is
                ###
              `,
        max_tokens: 64,
        temperature: 0,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\n"],
      });
  
      return res.status(200).json({
        success: true,
        data: response.data
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: error.response
          ? error.response.data
          : "There was an issue on the server",
      });
    }
  });


//> Principal Main PAge
app.get('/', (req, res, next) => {
    next()
}, (req, res) => {
    const reque = req.method
    res.status(200).json({
        STATUS_SERVER: "OK!!!",
        TYPE_req: reque
    })
});

//> GET DATA SYSTEM
const systemInfo = {
    user: os.userInfo().username,
    Architecture: os.cpus()[1].model + " " + os.arch(),
    Platform: os.type + " " + os.platform() + " " + os.release()
};


//> SERVER LISTEN
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`>>> SERVER LISTENING ON PORT: ${port}`)
    console.log(systemInfo)
});

