const scoreChainData = {
  alerts: {
    getAlerts: require('../data/bitcoin-scorechain/alerts/get-alerts.json'),
  },
  blockchain: {
    address: require('../data/bitcoin-scorechain/blockchain-data/address.json'),
    entity: require('../data/bitcoin-scorechain/blockchain-data/entity.json'),
    status: require('../data/bitcoin-scorechain/blockchain-data/status.json'),
    tx: require('../data/bitcoin-scorechain/blockchain-data/tx.json'),
  },
  reports: {
    getReport: require('../data/bitcoin-scorechain/reports/get-report.json'),
  },
  scoring: {
    address: require('../data/bitcoin-scorechain/scoring/address.json'),
    entity: require('../data/bitcoin-scorechain/scoring/entity.json'),
    transaction: require('../data/bitcoin-scorechain/scoring/transaction.json'),
    utxos: require('../data/bitcoin-scorechain/scoring/utxos.json'),
  },
  customisation: {
    scx: require('../data/bitcoin-scorechain/customisation/scx.json')
  }
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

exports.blockchainEntity = (req, res) => {
  res.json(scoreChainData.blockchain.entity);
}

/* SCORING */
exports.transaction = (req, res) => {
  res.json(scoreChainData.scoring.transaction);
}

exports.address = (req, res) => {
  res.json(scoreChainData.scoring.address);
}

exports.entity = (req, res) => {
  res.json(scoreChainData.scoring.entity);
}

exports.utxos = (req, res) => {
  res.json(scoreChainData.scoring.utxos);
}

/* CUSTOMISATION */
exports.customisationScx = (req, res) => {
  res.json(scoreChainData.customisation.scx);
}

/* REPORTS */
exports.getReport = (req, res) => {
  res.json(scoreChainData.reports.getReport);
}

/* ALERTS */
exports.getAlerts = (req, res) => {
  res.json(scoreChainData.alerts.getAlerts);
}
