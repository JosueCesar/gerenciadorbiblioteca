const {Router} = require('express');

const routes = new Router();

const LivroController = require('./app/controllers/LivroController');
const UsuarioController = require('./app/controllers/UsuarioController');
const EmprestimoController = require('./app/controllers/EmprestimoController');
const ReservaController = require('./app/controllers/ReservaController');

// Rotas Livro
routes.post('/livro', LivroController.store);
routes.get('/livro', LivroController.index);

// Rotas Usuario
routes.post('/usuario', UsuarioController.store);
routes.get('/usuario', UsuarioController.index);
routes.get('/usuario/:id', UsuarioController.show);
routes.delete('/usuario/:id', UsuarioController.delete);
routes.put('/usuario/:id', UsuarioController.update);

// Rotas Emprestimo
routes.post('/emprestimo/usuario/:usuario_id/livro/:livro_id', EmprestimoController.store);
routes.get('/emprestimo/', EmprestimoController.index);

// Rotas Reserva
routes.get('/reserva', ReservaController.index);
routes.post('/reserva/usuario/:usuario_id/livro/:livro_id', ReservaController.store);
routes.get('/reserva/:id', ReservaController.show);

module.exports = routes;