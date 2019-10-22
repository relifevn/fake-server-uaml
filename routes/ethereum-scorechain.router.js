const router = require('express').Router()
  , controllers = require('../controllers');

const ethereumScorechain = controllers.ethereumScorechain;
const ethereumScorechainAuthCheck = controllers.apiKeyCheckAuth.ethereumScorechainAuthCheck;

/* Blockchain data */
router.get('/status', ethereumScorechainAuthCheck, ethereumScorechain.blockchainStatus);
router.get('/tx/:hash', ethereumScorechainAuthCheck, ethereumScorechain.blockchainTx);
router.get('/address/:address', ethereumScorechainAuthCheck, ethereumScorechain.blockchainAddress);
router.get('/address/:address/erc20/balance', ethereumScorechainAuthCheck, ethereumScorechain.blockchainAddressBalance);
router.get('/address/:address/txs', ethereumScorechainAuthCheck, ethereumScorechain.blockchainAddressTxs);
router.get('/address/:address/erc20/txs', ethereumScorechainAuthCheck, ethereumScorechain.blockchainAddressErc20Txs);
router.get('/address/:address/Ethtxs', ethereumScorechainAuthCheck, ethereumScorechain.blockchainAddressEthTxs);

/* Scoring */
router.get('/scoring/address/:address/:direction', ethereumScorechainAuthCheck, ethereumScorechain.scoringAddress);
router.get('/scoring/address/:address/token/:tokenAddress/:direction', ethereumScorechainAuthCheck, ethereumScorechain.scoringAddressToken);
router.get('/scoring/transaction/:hash/:direction', ethereumScorechainAuthCheck, ethereumScorechain.scoringTransactionDirection);
router.get('/scoring/transaction/:hash/token/:tokenAddress/:direction', ethereumScorechainAuthCheck, ethereumScorechain.scoringTransactionTokenDirection);

/* Customisation */
router.get('/address/:address', ethereumScorechainAuthCheck, ethereumScorechain.getAddress);
router.get('/type', ethereumScorechainAuthCheck, ethereumScorechain.getTypes);
router.get('/group', ethereumScorechainAuthCheck, ethereumScorechain.getUserGroup);
router.get('/group/:groupId', ethereumScorechainAuthCheck, ethereumScorechain.getGroup);


/* Reports */
router.get('/report', ethereumScorechainAuthCheck, ethereumScorechain.getReport);

module.exports = router;
