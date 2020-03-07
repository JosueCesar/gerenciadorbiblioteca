const {Router} = require('express');

const routes = new Router();

const LivroController = require('./app/controllers/LivroController');
const UsuarioController = require('./app/controllers/UsuarioController');
const EmprestimoController = require('./app/controllers/EmprestimoController');
const ReservaController = require('./app/controllers/ReservaController');

// Rotas Livro
routes.post('/livro', LivroController.store);
routes.get('/livro', LivroController.index);
routes.get('/livro/:id', LivroController.show);
routes.put('/livro/:id', LivroController.update);
routes.delete('/livro/:id', LivroController.delete);

// Rotas Usuario
routes.post('/usuario', UsuarioController.store);
routes.get('/usuario', UsuarioController.index);
routes.get('/usuario/:id', UsuarioController.show);
routes.delete('/usuario/:id', UsuarioController.delete);
routes.put('/usuario/:id', UsuarioController.update);

// Rotas Emprestimo
routes.post('/emprestimo/usuario/:usuario_id/livro/:livro_id', EmprestimoController.store);
routes.get('/emprestimo/', EmprestimoController.index);
routes.get('/emprestimo/:id', EmprestimoController.show);
routes.put('/emprestimo/:id', EmprestimoController.update);
routes.delete('/emprestimo/:id', EmprestimoController.delete);

// Rotas Reserva
routes.post('/reserva/usuario/:usuario_id/livro/:livro_id', ReservaController.store);
routes.get('/reserva', ReservaController.index);
routes.get('/reserva/:id', ReservaController.show);
routes.put('/reserva/:id', ReservaController.update);
routes.delete('/reserva/:id', ReservaController.delete);

module.exports = routes;