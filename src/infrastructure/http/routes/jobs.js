var express = require('express');
var router = express.Router();
const JobController = require('../controllers/JobController');
const { isAdmin } = require('../middlewares/auth');

router.get('/', isAdmin, JobController.jobPage);

module.exports = router;