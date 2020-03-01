const { Sequelize, Model } = require('sequelize');
const bcrypt = require('bcryptjs');

class Usuario extends Model {
  static init(sequelize){
    super.init({
      nome: Sequelize.STRING,
      email: Sequelize.STRING,
      senha: Sequelize.VIRTUAL,
      hash: Sequelize.STRING,
    }, {
      sequelize
    });

    this.addHook('beforeSave', async (usuario) => {
      if(usuario.senha){
        usuario.hash = await bcrypt.hash(usuario.senha, 8);
      }
    });

    return this;
  }
}

module.exports = Usuario;