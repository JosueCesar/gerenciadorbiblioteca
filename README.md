# Gerenciador Bibliotecario

  - O projeto FastFeet backend é uma api para gerenciar pedidos para bibliotecas

### Pré-requisitos

   - node e yarn instalados

### Instalando

  - Clone o repositório, logo após clonar o repositório, inicie o comando no seu terminal:
  
  ```
  yarn
  ```
  
  - Agora, para acessar seu banco de dados, edite os dados do arquivo no diretório com os dados do seu banco:
  ```
  src/config/database.js
  ```
  - Acesse seu gerênciador de banco de dados e crie um banco de dados com o nome "biblioteca".

  - Agora, você deverá fazer as migrations das configurações das tabelas para seu banco, com o terminal execute os comandos:

  ```
  yarn sequelize db:migrate
  ```

### Iniciando a aplicação

  - Após a instalação de todas as dependências e fazer as migrations, para iniciar a aplicação, basta utilizar o comando em seu terminal: 

  ```
  yarn dev
  ``` 
  
### Utilização

Na api existem algumas rotas para serem utilizadas:

```
Use como base o endereço 'http://localhost:3000/'

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
```
