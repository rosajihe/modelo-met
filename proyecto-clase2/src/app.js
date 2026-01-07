require("dotenv").config();

const express = require("express")
const cors = require("cors")

const weatherRoutes = require("./routes/weather.routes");

function createApp() {

    const app = express()

    app.use(cors())
    app.use(express.json())

    app.get("/health", (req, res) => res.json({ ok: true }))

    app.use("/api", weatherRoutes)

    return app;

}


function startServer() {
    const app = createApp()
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log("api trabajando en http://localhost:3000")
    })
}

startServer()