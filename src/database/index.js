const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');

const Livro = require('../app/models/Livro');

const models = [Livro];

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