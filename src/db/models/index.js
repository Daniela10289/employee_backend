const { Employee, EmployeeSchema } = require('./employeeModel');
const { Department, DepartmentSchema } = require('./departmentModel');

function setupModels (sequelize) {
  Employee.init(EmployeeSchema, Employee.config(sequelize));
  Department.init(DepartmentSchema, Department.config(sequelize));

  Department.hasMany(Employee, {
    foreignKey: 'codigo',
    as: 'employee'
  });

  Employee.belongsTo(Department,{
    foreignKey: 'codigo_departamento',
    as:'departamento'
  });
}

module.exports = setupModels;
