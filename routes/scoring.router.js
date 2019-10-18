const router = require('express').Router()
  , controllers = require('../controllers')

/* Blockchain data */
router.get('/status', controllers.scoring.blockchainStatus);
router.get('/tx/:hash', controllers.scoring.blockchainTx);
router.get('/address/:address', controllers.scoring.blockchainAddress);
router.get('/entity/:address', controllers.scoring.blockchainEntity);

/* Scoring */
router.get('/transaction/:input/:hash', controllers.scoring.transaction);
router.get('/address/:type/:address', controllers.scoring.address);
router.get('/entity/:type/:address', controllers.scoring.entity);
router.post('/utxos/:type', controllers.scoring.utxos);

/* Customisation */
router.get('/scx', controllers.scoring.customisationScx);

/* Reports */
router.get('/report', controllers.scoring.getReport);

/* Alerts */
router.get('/alerts', controllers.scoring.getAlerts);

module.exports = router;
