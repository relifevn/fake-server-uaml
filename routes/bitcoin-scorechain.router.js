const router = require('express').Router()
  , controllers = require('../controllers');

const bitcoinScorechain = controllers.bitcoinScorechain;
const bitcoinScorechainAuthCheck = controllers.apiKeyCheckAuth.bitcoinScorechainAuthCheck;

/* Blockchain data */
router.get('/status', bitcoinScorechainAuthCheck, bitcoinScorechain.blockchainStatus);
router.get('/tx/:hash', bitcoinScorechainAuthCheck, bitcoinScorechain.blockchainTx);
router.get('/address/:address', bitcoinScorechainAuthCheck, bitcoinScorechain.blockchainAddress);
router.get('/entity/:address', bitcoinScorechainAuthCheck, bitcoinScorechain.blockchainEntity);

/* Scoring */
router.get('/scoring/transaction/:input/:hash', bitcoinScorechainAuthCheck, bitcoinScorechain.transaction);
router.get('/scoring/address/:type/:address', bitcoinScorechainAuthCheck, bitcoinScorechain.address);
router.get('/scoring/entity/:type/:address', bitcoinScorechainAuthCheck, bitcoinScorechain.entity);
router.post('/scoring/utxos/:type', bitcoinScorechainAuthCheck, bitcoinScorechain.utxos);

/* Customisation */
router.get('/scx', bitcoinScorechainAuthCheck, bitcoinScorechain.customisationScx);

/* Reports */
router.get('/report', bitcoinScorechainAuthCheck, bitcoinScorechain.getReport);

/* Alerts */
router.get('/alerts', bitcoinScorechainAuthCheck, bitcoinScorechain.getAlerts);

module.exports = router;
