const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');

const Livro = require('../app/models/Livro');
const Usuario = require('../app/models/Usuario');

const models = [Livro, Usuario];

class Database {
  constructor(){
    this.init();
  }
  init(){
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

module.exports = new Database();