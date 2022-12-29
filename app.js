const fs = require('fs');
var request = require('request');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('src/public'));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.hmtl')
})

app.post('/dados', (req, res) => {
    let nome = req.body.nome
    let sobrenome = req.body.sobrenome
    let email = req.body.email
    
    
    res.json({
        "nome": nome,
        "sobrenome": sobrenome,
        "email": email
    })
    
     let retorno = teste(nome, sobrenome, email, req.body)

     res.json(retorno);
})

function teste(nome, sobrenome, email, json) {

    //console.log('Json form: ' + json)
    var options = {
      'method': 'POST',
      'url': 'http://138.68.29.250:8082/',
      'headers': {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: json
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      
      const retornoApit = response.body
      let envioDadoDB = {}
        const nova = retornoApit.split('#')
        envioDadoDB.codNome = nova [1]
        envioDadoDB.codSobrenome = nova [3]
        envioDadoDB.codEmail = nova [5]
        console.log("Dados: " + JSON.stringify(envioDadoDB))

    });
    

    fs.writeFile('usuario.txt', `
        Nome: ${nome}; 
        Sobrenome: ${sobrenome}; 
        Email: ${email}`, (err) => {
        if (err) throw err;
        console.log('Arquivo criado com sucesso')
    })
}

module.exports = app;