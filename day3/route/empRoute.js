const express = require('express');

const emp = require('../controller/empController.js');

const router = express.Router();

router.post('/add', emp.addEmp);
router.put('/updt/:id', emp.updtEmp);
router.delete('/dlt/:id', emp.dltEmp);
router.get('/show', emp.showEmp);

module.exports = router;