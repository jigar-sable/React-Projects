const ApiKey = (req, res, next) => {
    if(req.query.api_key && req.query.api_key === process.env.API_KEY) {
        next();
    } else {
        res.status(404).json({
            status: "error",
            message: "Invalid API Key"
        })
    }
}

module.exports = ApiKey;