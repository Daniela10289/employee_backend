const Joi = require('joi');

const codigo = Joi.number().integer();
const nif = Joi.string();
const nombre = Joi.string();
const apellido1 = Joi.string();
const apellido2 = Joi.string();
const codigo_departamento = Joi.number().integer();

const createEmployeeSchema = Joi.object({
  codigo: codigo.required(),  
  nif: nif.required(),
  nombre: nombre.required(),
  apellido1: apellido1.required(),
  apellido2: apellido2.required(),
  codigo_departamento: codigo_departamento.required(),
});

const updateEmployeeSchema = Joi.object({
  codigo: codigo,
  nif: nif,
  nombre: nombre,
  apellido1: apellido1,
  apellido2: apellido2,
  codigo_departamento: codigo_departamento
});

const getEmployeeSchema = Joi.object({
  codigo: codigo.required(),
});

module.exports = { createEmployeeSchema, updateEmployeeSchema, getEmployeeSchema }