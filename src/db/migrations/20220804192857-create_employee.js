'use strict';

const { EmployeeSchema, EMPLOYEE_TABLE } = require('../models/employeeModel');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(EMPLOYEE_TABLE, EmployeeSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(EMPLOYEE_TABLE);
  }

};
