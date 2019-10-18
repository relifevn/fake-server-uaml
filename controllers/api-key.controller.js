const BITCOIN_SCORECHAIN_API_KEY = process.env.BITCOIN_SCORECHAIN_API_KEY;

exports.bitcoinScorechainAuthCheck = (req, res, next) => {
  console.log(req.params, req.query, req.body);
  if (req.query.token !== BITCOIN_SCORECHAIN_API_KEY) {
    res.status(401).json({ error: `invalid token` });
    return;
  }
  next();
}

