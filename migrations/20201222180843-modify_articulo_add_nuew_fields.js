'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Articulos', 'imgPath', {type: Sequelize.STRING});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Articulos');
  }
};