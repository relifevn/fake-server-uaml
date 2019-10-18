const router = require('express').Router()
  , controllers = require('../controllers')

/* Blockchain data */
router.get('/status', controllers.bitcoinScorechain.blockchainStatus);
router.get('/tx/:hash', controllers.bitcoinScorechain.blockchainTx);
router.get('/address/:address', controllers.bitcoinScorechain.blockchainAddress);
router.get('/entity/:address', controllers.bitcoinScorechain.blockchainEntity);

/* Scoring */
router.get('/scoring/transaction/:input/:hash', controllers.bitcoinScorechain.transaction);
router.get('/scoring/address/:type/:address', controllers.bitcoinScorechain.address);
router.get('/scoring/entity/:type/:address', controllers.bitcoinScorechain.entity);
router.post('/scoring/utxos/:type', controllers.bitcoinScorechain.utxos);

/* Customisation */
router.get('/scx', controllers.bitcoinScorechain.customisationScx);

/* Reports */
router.get('/report', controllers.bitcoinScorechain.getReport);

/* Alerts */
router.get('/alerts', controllers.bitcoinScorechain.getAlerts);

module.exports = router;
