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

  static associate(models){
    this.hasMany(models.Emprestimo, { foreignKey: 'livro_id', as: 'emprestimos' });
    this.hasMany(models.Reserva, { foreignKey: 'livro_id', as: 'reservas' });
  }
}

module.exports = Livro;