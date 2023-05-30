//* Dependencies
const express = require('express') //Framework
const os = require('os') //SystemInfo

//> Dependencies AI
const {Configuration, OpenAIApi} = require('openai')

//* Variables de Entorno
require("dotenv").config();

//? ejecute Express
const app = express()


//? use type json
app.use(express.json())

// Principal Main PAge
app.get('/', (req, res, next) => {
    console.log((os.uptime()/60)/60)
    console.log(os.homedir())
    console.log("UserInfo: " + os.userInfo().username);
    console.log("Architecture: " + os.cpus()[1].model +" "+ os.arch() );
    console.log("Platform: " +os.type + " " + os.platform() + " " + os.release())
    os.cpus()
    next()
}, (req, res) => {
    const reque = req.method
    res.status(200).json({
        STATUS_SERVER: "OK!!!",
        TYPE_req: reque
    })
});


const port = 9000;
app.listen(port, () => {
    console.log("SERVER START")
})