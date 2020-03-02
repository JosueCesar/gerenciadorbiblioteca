const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');

const models = [
  require('../app/models/Livro'),
  require('../app/models/Usuario'),
];

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