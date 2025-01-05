var express = require('express');
var router = express.Router();
const JobController = require('../controllers/JobController');
const { isAdmin, isAuthenticated } = require('../middlewares/auth');

router.get('/', isAuthenticated, isAdmin, JobController.index);
router.get('/create', isAuthenticated, isAdmin, JobController.createPage);
router.post('/create', isAuthenticated, isAdmin, JobController.create);
router.get('/update/:id', isAuthenticated, isAdmin, JobController.updatePage);
router.post('/update/:id', isAuthenticated, isAdmin, JobController.update);
router.post('/delete/:id', isAuthenticated, isAdmin, JobController.delete);
router.get('/apply/list', isAuthenticated, JobController.applyListPage);
router.get('/apply/detail/:id', isAuthenticated, JobController.applyDetailPage);
router.get('/apply/now/:id', isAuthenticated, JobController.applyPage);
router.post('/apply/now/:id', isAuthenticated, JobController.applyCreate);

module.exports = router;