'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('reservas', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      data_reserva: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      livro_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'livros',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('reservas');
  }
};
