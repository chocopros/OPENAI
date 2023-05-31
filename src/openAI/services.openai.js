//Dependencies
const controllersOpenAi = require("./controllers.openai")

//** SERVICES **

//> Answer & Ask
const answerToAi = async (req, res) => {
    const { contentIn } = req.body
    if (!promptIn) {
        res.status(400).json({
            fields: {
                promptIn: "string Js Descriptions"
            }
        })
    } else {
        return controllersOpenAi.answerAi(contentIn)
            .then(r => res.status(200).json({response: r}))
            .catch(err => res.status(400).json({message: err}))
    };
};


//> Generate Img
const imgCreate = async (req, res) => {
    const { promptIn } = req.body
    if (!promptIn) {
        res.status(400).json({
            fields: {
                promptIn: "string Js Descriptions"
            }
        })
    } else {
        return controllersOpenAi.imgGenerate(promptIn)
            .then(r => res.status(200).json({response: r}))
            .catch(err => res.status(400).json({message: err}))
    }; 
};


//> Generate Code Js for Description
const jsGenerated = async ( req, res ) => {
    const { promptIn } = req.body
    if (!promptIn) {
        res.status(400).json({
            fields: {
                promptIn: "string Js Descriptions"
            }
        })
    } else {
        return controllersOpenAi.jsGenerate(promptIn)
            .then(r => res.status(200).json({r}))
            .catch(err => res.status(400).json({message: err}))
    };
};

module.exports = {
    answerToAi,
    imgCreate,
    jsGenerated
};