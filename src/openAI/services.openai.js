//Dependencies
const controllersOpenAi = require("./controllers.openai")

//** SERVICES **

//> Answer & Ask
const answerToAi = async (req, res) => {
    const { contentIn } = req.body
    const response = controllersOpenAi.answerAi(contentIn)
        .then(r => res.status(200).json({response: r}))
        .catch(err => res.status(400).json({message: err}))
};


//> Generate Img
const imgCreate = async (req, res) => {
    const { promptIn } = req.body
    const response = controllersOpenAi.imgGenerate(promptIn)
        .then(r => res.status(200).json({response: r}))
        .catch(err => res.status(400).json({message: err}))
    
};

module.exports = {
    answerToAi,
    imgCreate
}