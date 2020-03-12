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
Após a configuração do seu banco, acesse seu gerênciador de banco de dados e crie um banco de dados com o nome "fastfeet".

Agora, você deverá fazer as migrations das configurações das tabelas para seu banco, com o terminal execute os comandos:

  ```
  yarn sequelize db:migrate
  ```

### Iniciando a aplicação

Após a instalação de todas as dependências e fazer as migrations, para iniciar a aplicação, basta utilizar o comando em seu terminal: 

  ```
  yarn dev
  ``` 
  
### Utilização

Na api existem algumas rotas para serem utilizadas:
