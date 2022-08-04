'use strict';

const { DepartmentSchema, DEPARTMENT_TABLE } = require('./../models/departmentModel');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(DEPARTMENT_TABLE, DepartmentSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(DEPARTMENT_TABLE);
  }
};

