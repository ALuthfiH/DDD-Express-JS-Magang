var express = require('express');
const { isAuthenticated, isAdmin } = require('../middlewares/auth');
const CandidateController = require('../controllers/CandidateController');
var router = express.Router();

router.get("/", isAuthenticated, isAdmin, CandidateController.index);
router.get("/:id", isAuthenticated, isAdmin, CandidateController.show);

module.exports = router;