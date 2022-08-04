const Joi = require('joi');

const codigo = Joi.number().integer();
const nombre = Joi.string();
const presupuesto = Joi.number();

const createDepartmentSchema = Joi.object({
  codigo: codigo.required(),
  nombre: nombre.required(),
  presupuesto: presupuesto.required()
});

const updateDepartmentSchema = Joi.object({
  codigo: codigo,
  nombre: nombre,
  presupuesto: presupuesto
});

const getDepartmentSchema = Joi.object({
  codigo: codigo.required(),
});

module.exports = { createDepartmentSchema, updateDepartmentSchema, getDepartmentSchema }