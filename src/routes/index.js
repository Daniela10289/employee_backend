const express = require('express');

const employeeRouter = require('./employeeRouter');
const departmentRouter = require('./departmentRouter');

function routerApi(app) {
  const router = express.Router();
  app.use('/api', router);
  router.use('/employee', employeeRouter);
  router.use('/department', departmentRouter);
}

module.exports = routerApi;
