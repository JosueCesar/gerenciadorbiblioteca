const {Router} = require('express');

const routes = new Router();

const LivroController = require('./app/controllers/LivroController');
const UsuarioController = require('./app/controllers/UsuarioController');

routes.post('/livro', LivroController.store);
routes.get('/livro', LivroController.index);

routes.post('/usuario', UsuarioController.store);
routes.get('/usuario', UsuarioController.index);
routes.get('/usuario/:id', UsuarioController.show);
routes.delete('/usuario/:id', UsuarioController.delete);


module.exports = routes;