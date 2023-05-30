//> Conection openAI
const openai = require('../utils/connect.openai')


//> Q & A Preguntas y respuestas
const answerAi = async (ask) => {
    return await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: ask }],
        max_tokens: 70,
        temperature: 0,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        //stop: ["\n"], 
    });
};


//> GENERATOR IMG
const imgGenerate = async ( descriptionImg ) => {
    const response = await openai.createImage({
        prompt: `${descriptionImg}`,
        n: 1,
        size: "512x512"
    })
    return response.data.data[0].url;
};

module.exports = {
    answerAi,
    imgGenerate
}


//** TEST */

//> GENERATE IMG TEST
/*
imgGenerate("perro volador")
    .then(r => console.log(r))
    .catch(err => console.log(err))
*/