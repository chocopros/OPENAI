//> Conection openAI
const openai = require('../utils/connect.openai')


//> Q & A Preguntas y respuestas
const answerAi = async (ask) => {
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: ask }],
        max_tokens: 70,
        temperature: 0,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        //stop: ["\n"], 
    });

    return response.data.choices[0].message
};


//> GENERATOR IMG
const imgGenerate = async (descriptionImg) => {
    const response = await openai.createImage({
        prompt: `${descriptionImg}`,
        n: 1,
        size: "512x512"
    })
    return response.data.data[0].url;
};

//> GENERATOR CODE JAVASCRIPT
const jsGenerate = async (desc) => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${desc}`,
        temperature: 0,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
        //stop: ["You:"],
    })

    return response.data.choices[0].text
};


module.exports = {
    answerAi,
    imgGenerate,
    jsGenerate
}


//** TEST */

//> GENERATE IMG TEST
/*
imgGenerate("perro volador")
    .then(r => console.log(r))
    .catch(err => console.log(err))
*/

//> ASK
/*
answerAi('hola mundo')
    .then(r => console.log(r))
    .catch(err => console.log(err))
*/

//> ASK
/*
jsGenerate('Como crear una funcion en Javascript donde se sumen dos valores')
    .then(r => console.log(r))
    .catch(err => console.log(err))
*/