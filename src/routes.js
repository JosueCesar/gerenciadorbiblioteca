const {Router} = require('express');

const routes = new Router();

const LivroController = require('./app/controllers/LivroController');

routes.post('/livro', LivroController.store);

module.exports = routes;