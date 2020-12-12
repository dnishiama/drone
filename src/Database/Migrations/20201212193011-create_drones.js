'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('drones', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true, 
          allowNull: false,
        },
        customer_image:{
          type: Sequelize.STRING,
        },
        customer_name:{
          type: Sequelize.STRING,
        }, 
        customer_address:{
          type: Sequelize.STRING,
        }, 
        battery:{
          type: Sequelize.INTEGER,
          allowNull: false,
        }, 
        max_speed:{
          type: Sequelize.FLOAT,
          allowNull: false,
        }, 
        average_speed:{
          type: Sequelize.FLOAT,
          allowNull: false,
        }, 
        status:{
          type: Sequelize.STRING,
          allowNull: false,
        }, 
        current_fly:{
          type: Sequelize.INTEGER, 
          allowNull: false,
        },
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('drones');
  }
};
