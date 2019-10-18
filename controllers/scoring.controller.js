const API_KEY = process.env.API_KEY;

const scoreChainData = {
  alerts: {
    getAlerts: require('../data/scorechain/alerts/get-alerts.json'),
  },
  blockchain: {
    address: require('../data/scorechain/blockchain-data/address.json'),
    entity: require('../data/scorechain/blockchain-data/entity.json'),
    status: require('../data/scorechain/blockchain-data/status.json'),
    tx: require('../data/scorechain/blockchain-data/tx.json'),
  },
  reports: {
    getReport: require('../data/scorechain/reports/get-report.json'),
  },
  scoring: {
    address: require('../data/scorechain/scoring/address.json'),
    entity: require('../data/scorechain/scoring/entity.json'),
    transaction: require('../data/scorechain/scoring/transaction.json'),
    utxos: require('../data/scorechain/scoring/utxos.json'),
  },
  customisation: {
    scx: require('../data/scorechain/customisation/scx.json')
  }
}

/* BLOCKCHAIN DATA */
exports.blockchainStatus = (req, res) => {
  console.log(req.params, req.query, req.body);

  if (req.query.token !== API_KEY) {
    res.status(401).json({ error: 'invalid token' });
    return;
  }

  res.json(scoreChainData.blockchain.status);
}

exports.blockchainTx = (req, res) => {
  console.log(req.params, req.query, req.body);

  if (req.query.token !== API_KEY) {
    res.status(401).json({ error: 'invalid token' });
    return;
  }

  res.json(scoreChainData.blockchain.tx);
}

exports.blockchainAddress = (req, res) => {
  console.log(req.params, req.query, req.body);

  if (req.query.token !== API_KEY) {
    res.status(401).json({ error: 'invalid token' });
    return;
  }

  res.json(scoreChainData.blockchain.address);
}

exports.blockchainEntity = (req, res) => {
  console.log(req.params, req.query, req.body);

  if (req.query.token !== API_KEY) {
    res.status(401).json({ error: 'invalid token' });
    return;
  }

  res.json(scoreChainData.blockchain.entity);
}

/* SCORING */
exports.transaction = (req, res) => {
  console.log(req.params, req.query, req.body);

  if (req.query.token !== API_KEY) {
    res.status(401).json({ error: 'invalid token' });
    return;
  }

  res.json(scoreChainData.scoring.transaction);
}

exports.address = (req, res) => {
  console.log(req.params, req.query, req.body);

  if (req.query.token !== API_KEY) {
    res.status(401).json({ error: 'invalid token' });
    return;
  }

  res.json(scoreChainData.scoring.address);
}

exports.entity = (req, res) => {
  console.log(req.params, req.query, req.body);

  if (req.query.token !== API_KEY) {
    res.status(401).json({ error: 'invalid token' });
    return;
  }

  res.json(scoreChainData.scoring.entity);
}

exports.utxos = (req, res) => {
  console.log(req.params, req.query, req.body);

  if (req.query.token !== API_KEY) {
    res.status(401).json({ error: 'invalid token' });
    return;
  }

  res.json(scoreChainData.scoring.utxos);
}

/* CUSTOMISATION */
exports.customisationScx = (req, res) => {
  console.log(req.params, req.query, req.body);

  if (req.query.token !== API_KEY) {
    res.status(401).json({ error: 'invalid token' });
    return;
  }

  res.json(scoreChainData.customisation.scx);
}

/* REPORTS */
exports.getReport = (req, res) => {
  console.log(req.params, req.query, req.body);

  if (req.query.token !== API_KEY) {
    res.status(401).json({ error: 'invalid token' });
    return;
  }

  res.json(scoreChainData.reports.getReport);
}

/* ALERTS */
exports.getAlerts = (req, res) => {
  console.log(req.params, req.query, req.body);

  if (req.query.token !== API_KEY) {
    res.status(401).json({ error: 'invalid token' });
    return;
  }

  res.json(scoreChainData.alerts.getAlerts);
}

exports.scoringValidator = (req, res, next) => {

}

exports.reporting = (req, res, next) => {

  res.json({});
}