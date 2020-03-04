const { Sequelize, Model } = require('sequelize');

class Reserva extends Model {
  static init(sequelize){
    super.init({
      data_reserva: Sequelize.DATE,
    }, {
      sequelize,
    });
  
    this.addHook('beforeSave', async (reserva) => {
      reserva.data_reserva = await new Date();
    });

    return this;
  }

  static associate(models){
    this.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'usuario' });
    this.belongsTo(models.Livro, { foreignKey: 'livro_id', as: 'livro' });
  }

  static dateToString(date){
    return (
        date.getDate() + "/"
      + date.getMonth() + "/"
      + date.getFullYear());
  }
}

module.exports = Reserva;