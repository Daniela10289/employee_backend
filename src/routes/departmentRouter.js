const express =require('express');

const validatorHandler = require('../middlewares/validatorHandler');
const DepartmentService = require('../services/departmentService');
const { getDepartmentSchema, createDepartmentSchema, updateDepartmentSchema } = require('../schemas/departmentSchema');

const router = express.Router();
const service = new DepartmentService();

router.get('/', async (req, res, next) => {
  try {
    const departments = await service.find();
    res.json(departments);
  } catch (error) {
    next(error);
  }
});

router.get('/:codigo',
  validatorHandler(getDepartmentSchema, 'params'),
  async (req, res, next) => {
    try {
      const { codigo } = req.params;
      const findDepartment = await service.findOne(codigo);
      res.json(findDepartment);
    } catch (error) {
      res.status(404).json({error: "No se encontró"});
    }
  }
);

router.post('/',
  validatorHandler(createDepartmentSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newDepartment = await service.create(body);
      res.status(201).json(newDepartment);
    } catch (error) {
      res.status(400).json({error: "Hubo un error con los datos ingresados!"});
    }
  }
);

router.put('/:codigo',
  validatorHandler(getDepartmentSchema, 'params'),
  validatorHandler(updateDepartmentSchema, 'body'),
  async (req, res, next) => {
    try {
      const { codigo } = req.params;
      const body = req.body;
      const editDepartment = await service.update(codigo, body);
      res.json(editDepartment);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:codigo',
  validatorHandler(getDepartmentSchema, 'params'),
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
