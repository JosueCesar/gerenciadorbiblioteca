'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('livros', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      autor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      editora: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantidade: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('livros');
  }
};
