const express = require("express")
const router = express.Router();


const { apiKeyMiddleware } = require("../middleware/apiKey.middleware")
const { getWeatherByCity } = require("../controllers/weather.controller")

router.get("/weather", apiKeyMiddleware, getWeatherByCity)

module.exports = router