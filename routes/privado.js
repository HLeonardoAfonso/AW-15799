const privadoRouter = require('express').Router();


// Define uma rota para a página HTML
privadoRouter.get('/', (req, res) => {
    // Envie o arquivo HTML como resposta para a solicitação HTTP
    res.sendFile('templates/backOffice/tabelaCarros.html', { root: "." });
});


module.exports = privadoRouter;