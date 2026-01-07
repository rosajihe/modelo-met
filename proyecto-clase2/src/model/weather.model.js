function createWeatherModel(raw) {
    return {
        city: raw.city ?? null,
        country: raw.country ?? null,
        temperature: raw.temperature ?? null,
        feelsLike: raw.feelsLike ?? null,
        humidity: raw.humidity ?? null,
        description: raw.description ?? null,
    };
}

module.exports = { createWeatherModel };