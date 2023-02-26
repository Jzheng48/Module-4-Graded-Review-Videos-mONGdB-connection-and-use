const express = require('express')
const router = express.Router();
const studentController = require('../controllers/studentController')


router.route('/')
.get( studentController.getData)
.post(studentController.postData);

router.route('/:id')
.get( studentController.getDataById)
.post(studentController.postDataById)
.put(studentController.putDataById)
.delete(studentController.deleteDataById);


module.exports = router
