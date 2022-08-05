const { Model, DataTypes, Sequelize} = require('sequelize');

const { DEPARTMENT_TABLE } = require('./departmentModel');

const EMPLOYEE_TABLE = 'employees';

const EmployeeSchema = {
  codigo: {
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nif: {
    allowNull: false,
    type: DataTypes.STRING(9),
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING(100)
  },
  apellido1: {
    allowNull: false,
    type: DataTypes.STRING(100)
  },
  apellido2: {
    allowNull: false,
    type: DataTypes.STRING(100)
  },
  codigo_departamento: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: DEPARTMENT_TABLE,
      key: 'codigo'
    },
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Employee extends Model {

  static config(sequelize) {
    return {
      sequelize,
      tableName: EMPLOYEE_TABLE,
      modelName: 'Employee',
      timestamps: false
    }
  }
}


module.exports = { EMPLOYEE_TABLE, EmployeeSchema, Employee }
