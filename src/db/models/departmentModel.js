const { Model, DataTypes, Sequelize} = require('sequelize');

const DEPARTMENT_TABLE = 'departments';

const DepartmentSchema = {
  codigo: {
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    type: DataTypes.INTEGER()
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING(100),
  },
  presupuesto: {
    allowNull: false,
    type: DataTypes.DOUBLE
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Department extends Model {

  static config(sequelize) {
    return {
      sequelize,
      tableName: DEPARTMENT_TABLE,
      modelName: 'Department',
      timestamps: false
    }
  }
}


module.exports = { DEPARTMENT_TABLE, DepartmentSchema, Department }
