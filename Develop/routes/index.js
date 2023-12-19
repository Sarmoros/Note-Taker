const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./routes');

router.use('/notes', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;