const express =require('express');

const validatorHandler = require('../middlewares/validatorHandler');
const EmployeeService = require('../services/employeeService');
const { updateEmployeeSchema, createEmployeeSchema, getEmployeeSchema } = require('../schemas/employeeSchema');
const {Department} = require('../db/models/departmentModel');


const router = express.Router();
const service = new EmployeeService();

router.get('/', async (req, res, next) => {
  try {
    const employees = await service.find({
      include: {
        model: Department, 
        as: "departamento" ,
        attributes:['nombre']
      }
    });
    res.json(employees);
  } catch (error) {
    next(error);
  }
});

router.get('/:codigo',
  validatorHandler(getEmployeeSchema, 'params'),
  async (req, res, next) => {
    try {
      const { codigo } = req.params;
      const findEmployee = await service.findOne(codigo);
      res.json(findEmployee);
    } catch (error) {
      res.status(404).json({error: "No se encontró"});
    }
  }
);

router.post('/',
  validatorHandler(createEmployeeSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newEmployee = await service.create(body);
      res.status(201).json(newEmployee);
    } catch (error) {
      res.status(400).json({error: "Hubo un error con los datos ingresados!"});
    }
  }
);

router.put('/:codigo',
  validatorHandler(getEmployeeSchema, 'params'),
  validatorHandler(updateEmployeeSchema, 'body'),
  async (req, res, next) => {
    try {
      const { codigo } = req.params;
      const body = req.body;
      const editEmployee = await service.update(codigo, body);
      res.json(editEmployee);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:codigo',
  validatorHandler(getEmployeeSchema, 'params'),
  async (req, res, next) => {
    try {
      const { codigo } = req.params;
      await service.delete(codigo);
      res.status(201).json({codigo});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
