const privadoRouter = require('express').Router();


// Define uma rota para a página HTML
privadoRouter.get('/gerirCarros', (req, res) => {
    // Envie o arquivo HTML como resposta para a solicitação HTTP
    res.sendFile('/sites/ap2/webServiceJSON/templates/backOffice/tabelaCarros.html');
});


module.exports = privadoRouter;