const {Router} = require('express');

const routes = new Router();

const LivroController = require('./app/controllers/LivroController');
const UsuarioController = require('./app/controllers/UsuarioController');

routes.post('/livro', LivroController.store);
routes.post('/usuario', UsuarioController.store);

module.exports = routes;