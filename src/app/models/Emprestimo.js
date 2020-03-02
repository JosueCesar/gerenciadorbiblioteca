const { Sequelize, Model } = require('sequelize');

class Emprestimo extends Model{
  static init(sequelize){
    super.init({
      data_emprestimo: Sequelize.DATE,
      data_devolucao: Sequelize.DATE,
      data_entrega: Sequelize.DATE,
    }, { 
      sequelize 
    });

    this.addHook('beforeSave', async (emprestimo) => {
      if(emprestimo.usuario_id && emprestimo.livro_id){

        const now = await new Date();
        const devolucao = await new Date(now);
        await devolucao.setDate(now.getDate() + 5);

        emprestimo.data_emprestimo = now;
        emprestimo.data_devolucao = await devolucao;
      }
    });

    return this;
  }

  static associate(models){
    this.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'emprestimo' });
    this.belongsTo(models.Usuario, { foreignKey: 'livro_id', as: 'livro' });
  }
}

module.exports = Emprestimo;