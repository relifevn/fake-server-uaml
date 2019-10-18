const router = require('express').Router()
  , controllers = require('../controllers')

router.get('/transaction/:input/:hash', controllers.scoring.transaction);
router.get('/address/:type/:address', controllers.scoring.address);
router.get('/entity/:type/:address', controllers.scoring.entity);
router.post('/utxos/:type', controllers.scoring.utxos);

module.exports = router;
