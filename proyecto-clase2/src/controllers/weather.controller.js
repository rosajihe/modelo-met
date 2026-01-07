const weatherService = require("../services/weather.service");

async function getWeatherByCity(req, res) {
    try {
        const city = (req.query.city || "").trim();

        if (!city) {
            return res.status(400).json({
                error: "BadRequest",
                message: "La ciudad es requerida",
            });
        }

        const weather = await weatherService.fetchWeatherByCity(city);
        return res.json(weather);
    } catch (error) {
        return res.status(500).json({
            error: "ServiceError",
            message: "No se pudo realizar la consulta :(",
        });
    }
}

module.exports = { getWeatherByCity };