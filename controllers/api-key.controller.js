
exports = (req, res, next) => {

    if (req.query.token !== API_KEY) {
        console.log(req.params, req.query);
        next({ status: 401, error: 'invalid token' });
    }

}

