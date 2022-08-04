const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class DepartmentService {
  constructor() {}

  async create(data) {
    const newDepartment = await models.Department.create(data);
    return newDepartment;
  }

  async find() {
    const rta = await models.Department.findAll();
    return rta;
  }

  async findOne(codigo) {
    const department = await models.Department.findByPk(codigo);

    if (!department) {
      throw boom.notFound('department not found');
    }
    
    return department;
  }

  async findByDocument(document) {
    const rta = await models.Department.findOne({
      where: { document }
    });
    return rta;
  }

  async update(codigo, changes) {
    const department = await this.findOne(codigo);
    const rta = await department.update(changes);
    return rta;
  }

  async delete(codigo) {
    const department = await models.Department.findByPk(codigo);
    await department.destroy();
    return { codigo };
  }
}

module.exports = DepartmentService;
