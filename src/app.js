//* Dependencies
const express = require('express') //Framework
const os = require('os') //SystemInfo
//* Variables de Entorno
require("dotenv").config();

//? ejecute Express
const app = express();

//? use type json
app.use(express.json());

//> Dependencies AI
const { Configuration, OpenAIApi } = require('openai')

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);



//> Q & A Preguntas y respuestas
app.post("/chat", async (req, res) => {

    const completion = async () => {
        const { contentIn } = req.body
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: contentIn }],
            max_tokens: 70,
            temperature: 0,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            //stop: ["\n"],
        });

        return response.data.choices[0].message
    }

    completion()
        .then(r => res.status(200).json({
            success: true,
            response: `>>>ASSISTANT NATHALY M.<<<: ${r.content} `
        }))
        .catch(err => res.status(400).json({
            success: false,
            error: err
        }))
}
);


//> IMG Generation
app.post("/generation-img", async ( req, res ) => {

    const imgGenerate = async() => {
        const { prompt } = req.body
        const response = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: "512x512"
        })
    
        return response.data.data[0].url;
    };

    imgGenerate()
        .then(r => res.status(201).json({
            url: r
        }))
        .catch(err => res.status(400).json({message: err}))
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

