var express = require('express');
var router = express.Router();
var controller = require('../controller/user');
const bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get ('/', controller.get);
router.post ('/', controller.post);
router.put ('/', controller.edit);
// router.delete ('/', controller.delete);

module.exports = router;