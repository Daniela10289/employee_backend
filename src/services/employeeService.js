const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class EmployeeService {
  constructor() {}

  async create(data) {
    const newEmployee = await models.Employee.create(data);
    return newEmployee;
  }

  async find(args) {
    const rta = await models.Employee.findAll(args);
    return rta;
  }

  async findOne(codigo) {
    const employee = await models.Employee.findByPk(codigo);
    if (!employee) {
      throw boom.notFound('employee not found');
    }
    return employee;
  }

  async findByDocument(document) {
    const rta = await models.Employee.findOne({
      where: { document }
    });
    return rta;
  }

  async update(codigo, changes) {
    const employee = await this.findOne(codigo);
    const rta = await employee.update(changes);
    return rta;
  }

  async delete(codigo) {
    const employee = await models.Employee.findByPk(codigo);
    await employee.destroy();
    return { codigo };
  }
}

module.exports = EmployeeService;
