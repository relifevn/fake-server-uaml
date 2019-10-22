const BITCOIN_SCORECHAIN_API_KEY = process.env.BITCOIN_SCORECHAIN_API_KEY;
const ETHEREUM_SCORECHAIN_API_KEY = process.env.ETHEREUM_SCORECHAIN_API_KEY;

exports.bitcoinScorechainAuthCheck = (req, res, next) => {
  console.log(req.params, req.query, req.body);
  if (!req.query.token) {
    res.status(401).json({ "success": false, "result": "Please provide an API token" });
    return;
  }
  if (req.query.token !== BITCOIN_SCORECHAIN_API_KEY) {
    res.status(401).json({ error: `invalid token` });
    return;
  }
  next();
}

exports.ethereumScorechainAuthCheck = (req, res, next) => {
  console.log(req.params, req.query, req.body);
  if (!req.query.token) {
    res.status(401).json({ "success": false, "result": "Please provide an API token" });
    return;
  }
  if (req.query.token !== ETHEREUM_SCORECHAIN_API_KEY) {
    res.status(401).json({ error: `invalid token` });
    return;
  }
  next();
}


