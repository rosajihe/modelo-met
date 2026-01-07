const axios = require("axios");
const { createWeatherModel } = require("../model/weather.model");

async function fetchWeatherByCity(city) {
    const apiKey = process.env.PROVIDER_API_KEY;

    const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
            params: {
                q: city,
                appid: apiKey,
                units: "metric",
                lang: "es",
            },
        }
    );

    const w = response.data;

    return createWeatherModel({
        city: w.name,
        country: w.sys?.country,
        temperature: w.main?.temp,
        feelsLike: w.main?.feels_like,
        humidity: w.main?.humidity,
        description: w.weather?.[0]?.description,
    });
}

module.exports = { fetchWeatherByCity };