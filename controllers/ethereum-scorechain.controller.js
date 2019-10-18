const scoreChainData = {
  blockchain: {
    address: require('../data/ethereum-scorechain/blockchain-data/address.json'),
    addressBalance: require('../data/ethereum-scorechain/blockchain-data/address-balance.json'),
    addressErc20Txs: require('../data/ethereum-scorechain/blockchain-data/address-erc20-txs.json'),
    addressEthTxs: require('../data/ethereum-scorechain/blockchain-data/address-ethtxs.json'),
    addressTxs: require('../data/ethereum-scorechain/blockchain-data/address-txs.json'),
    status: require('../data/ethereum-scorechain/blockchain-data/status.json'),
    tx: require('../data/ethereum-scorechain/blockchain-data/tx.json'),
  },
  customisation: {
    getAddress: require('../data/ethereum-scorechain/customisation/getAddress.json'),
    getGroup: require('../data/ethereum-scorechain/customisation/getGroup.json'),
    getTypes: require('../data/ethereum-scorechain/customisation/getTypes.json'),
    getUserGroup: require('../data/ethereum-scorechain/customisation/getUserGroup.json'),
  },
  reports: {
    getReports: require('../data/ethereum-scorechain/reports/getReports.json'),
  },
  scoring: {
    addressToken: require('../data/ethereum-scorechain/scoring/address-token.json'),
    address: require('../data/ethereum-scorechain/scoring/address.json'),
    transactionDirection: require('../data/ethereum-scorechain/scoring/transaction-direction.json'),
    transactionTokenDirection: require('../data/ethereum-scorechain/scoring/transaction-token-direction.json'),
  },

}

/* BLOCKCHAIN DATA */
exports.blockchainStatus = (req, res) => {
  res.json(scoreChainData.blockchain.status);
}

exports.blockchainTx = (req, res) => {
  res.json(scoreChainData.blockchain.tx);
}

exports.blockchainAddress = (req, res) => {
  res.json(scoreChainData.blockchain.address);
}

exports.blockchainAddressBalance = (req, res) => {
  res.json(scoreChainData.blockchain.addressBalance);
}

exports.blockchainAddressTxs = (req, res) => {
  res.json(scoreChainData.blockchain.addressTxs);
}

exports.blockchainAddressErc20Txs = (req, res) => {
  res.json(scoreChainData.blockchain.addressErc20Txs);
}

exports.blockchainAddressEthTxs = (req, res) => {
  res.json(scoreChainData.blockchain.addressEthTxs);
}

/* TODO */
/* SCORING */
// exports.transaction = (req, res) => {
//   res.json(scoreChainData.scoring.transaction);
// }

// exports.address = (req, res) => {
//   res.json(scoreChainData.scoring.address);
// }

// exports.entity = (req, res) => {
//   res.json(scoreChainData.scoring.entity);
// }

// exports.utxos = (req, res) => {
//   res.json(scoreChainData.scoring.utxos);
// }

// /* CUSTOMISATION */
// exports.customisationScx = (req, res) => {
//   res.json(scoreChainData.customisation.scx);
// }

// /* REPORTS */
// exports.getReport = (req, res) => {
//   res.json(scoreChainData.reports.getReport);
// }

// /* ALERTS */
// exports.getAlerts = (req, res) => {
//   res.json(scoreChainData.alerts.getAlerts);
// }
