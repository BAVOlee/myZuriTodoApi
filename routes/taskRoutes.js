const express = require('express');
const router = express.Router();
const controller = require('../controllers/tasksControllers');

 
// Route create New
router.post('/newTask', controller.createTask);

// Route get all
router.get('/retrieveAllTasks', controller.retrieveAllTasks);

// Route Update 
router.put('/updateTask/:id', controller.updateTask);

// Route Delete
router.delete('/deleteTask/:id', controller.deleteTask);


module.exports = router;