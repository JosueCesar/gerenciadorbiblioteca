const { Sequelize, Model } = require('sequelize');

class Emprestimo extends Model{
  static init(sequelize){
    super.init({
      data_emprestimo: Sequelize.DATE,
      data_devolucao: Sequelize.DATE,
      data_entrega: Sequelize.DATE,
    },{ 
      sequelize 
    });

    return this;
  }
}

module.exports = Emprestimo;