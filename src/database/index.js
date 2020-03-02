const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');

const models = [
  require('../app/models/Livro'),
  require('../app/models/Usuario'),
  require('../app/models/Emprestimo'),
];

class Database {
  constructor(){
    this.init();
  }
  init(){
    this.connection = new Sequelize(databaseConfig);

    /**
     *  Este trecho de código, usa uma função "map" para 
     *  passar por cada model do array "models", e executa
     *  o método init de cada model para que o Sequelize
     *  possar utilizar seus métodos SQL nos devidos models.  
     */
    models.map(model => model.init(this.connection));

    /**
     *  Este trecho passa por cada model do array "models",
     *  tenta usar o método "associate" realizar os devidos
     *  relacionamentos nos models, os que não tem o metodo
     *  são ignorados os erros.
     */
    models.forEach(model => {
      try {
        model.associate(this.connection.models)
      }
      catch(e){}
    });
  }
}

module.exports = new Database();