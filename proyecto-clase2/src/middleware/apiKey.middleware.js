
function apiKeyMiddleware(req, res, next) {
    const apiKey = process.env.APP_API_KEY

    if (!apiKey || apiKey !== process.env.APP_API_KEY) {
        return res.status(401).json({
            error: "Unauthorized",
            message: "Sin permisos",
        });
    }

    return next();
}

module.exports = { apiKeyMiddleware };
