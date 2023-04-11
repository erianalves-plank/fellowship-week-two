const express = require('express');
const router = express.Router();
const employessController = require('../../controllers/employeesController');

router.route('/')
    .get(employessController.getAllEmployess)
    .post(employessController.createNewEmployee)
    .put(employessController.updateEmployee)
    .delete(employessController.deleteEmployee);

router.route('/:id')
    .get(employessController.getEmployee);

module.exports = router;
