const API_KEY = process.env.API_KEY;

const scoringTransactionData = require('../data/scorechain-bitcoin-get-scoring-transaction.json');
const scoringAddressData = require('../data/scorechain-bitcoin-get-scoring-address.json');
const scoringEntityData = require('../data/scorechain-bitcoin-get-scoring-entity.json');
const scoringUtxosData = require('../data/scorechain-bitcoin-post-scoring-utxos.json');

exports.transaction = (req, res) => {
  console.log(req.params, req.query, req.body);

  if (req.query.token !== API_KEY) {
    res.status(401).json({ error: 'invalid token' });
    return;
  }

  res.json(scoringTransactionData);
}

exports.address = (req, res) => {
  console.log(req.params, req.query, req.body);

  if (req.query.token !== API_KEY) {
    res.status(401).json({ error: 'invalid token' });
    return;
  }

  res.json(scoringAddressData);
}

exports.entity = (req, res) => {
  console.log(req.params, req.query, req.body);

  if (req.query.token !== API_KEY) {
    res.status(401).json({ error: 'invalid token' });
    return;
  }

  res.json(scoringEntityData);
}

exports.utxos = (req, res) => {
  console.log(req.params, req.query, req.body);

  if (req.query.token !== API_KEY) {
    res.status(401).json({ error: 'invalid token' });
    return;
  }

  res.json(scoringUtxosData);
}

exports.scoringValidator = (req, res, next) => {

}

exports.reporting = (req, res, next) => {

  res.json({});
}