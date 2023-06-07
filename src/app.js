//* Dependencies
const express = require('express') //Framework
const os = require('os') //SystemInfo

//? ejecute Express
const app = express();

//? use type json
app.use(express.json());

//>> ROUTER
const openAiRouter = require('./openAI/route.openai')


//> Principal Main PAge
app.get('/', (req, res, next) => {
    next()
}, (req, res) => {
    //const reque = req.method
    res.status(200).json({
        STATUS_SERVER: "OK!!!",
        LINK_SERVICES: {
            reqMethod_POST:{
                chat: 'http://localhost:9000/api/v1/openai/chat',
                generationImg: 'http://localhost:9000/api/v1/openai/generation-img',
                jsgenerate: 'http://localhost:9000/api/v1/openai/jsgenerate'
            }
        }
    })
});

//>>> Router USE
app.use('/api/v1/openai', openAiRouter)


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

