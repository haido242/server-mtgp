const router = require('express').Router();
const dataCtrl = require('./controllers/data.controller');

router.get('/', dataCtrl.getList);
router.post('/', dataCtrl.create);


module.exports = router;