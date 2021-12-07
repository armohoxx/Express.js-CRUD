'use strict';
module.exports = {
  //up this is migration method //up = จะรันก่อน
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('phones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      phonenumber: {
        type: Sequelize.STRING
      },
      owner: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  //down รันหลัง up เเต่จะหลังไฟล์อื่นที่มี up
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('phones');
  }
};

//migration รันเพื่อสร้างฐานข้อมูลโดยไม่ต้องกดสร้าง database เอง