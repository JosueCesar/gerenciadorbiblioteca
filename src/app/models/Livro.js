const { Sequelize, Model } = require('sequelize');

class Livro extends Model {
  static init(sequelize){
    super.init({
      titulo: Sequelize.STRING,
      autor: Sequelize.STRING,
      editora: Sequelize.STRING,
      quantidade: Sequelize.INTEGER,
    }, {
      sequelize,
    });

    return this;
  }
}

module.exports = Livro;