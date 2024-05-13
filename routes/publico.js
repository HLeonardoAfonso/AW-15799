const publicoRouter = require('express').Router();
const path = require('path');

// __dirname representa o diretório atual do arquivo
const diretorioAtual = __dirname;
// Navegar para cima um diretório
const diretorioPai = path.join(__dirname, '..');

// Define uma rota para a página HTML
publicoRouter.get('/', (req, res) => {
    // Envie o arquivo HTML como resposta para a solicitação HTTP  //res.sendFile('/sites/ap2/webServicePSG/templates/frontEnd/index.html');
      res.sendFile(diretorioPai + '/templates/frontEnd/index.html');
});

publicoRouter.get('/signup', (req, res) => {
  // Envie o arquivo HTML como resposta para a solicitação HTTP  //res.sendFile('/sites/ap2/webServicePSG/templates/frontEnd/index.html');
    res.sendFile(diretorioPai + '/templates/frontEnd/novoUser.html');
});

publicoRouter.get('/signin', (req, res) => {
  // Envie o arquivo HTML como resposta para a solicitação HTTP  //res.sendFile('/sites/ap2/webServicePSG/templates/frontEnd/index.html');
    res.sendFile(diretorioPai + '/templates/frontEnd/login.html');
});


module.exports = publicoRouter;