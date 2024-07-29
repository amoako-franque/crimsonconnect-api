const express = require("express")
const authRouter = require("./routes/authRoutes")
const morgan = require("morgan")
require("dotenv").config()
const PORT = process.env.PORT || 4789
// initialize express
const app = express()

// handle express errors

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

// routes
app.use("/api/v1/auth", authRouter)
// app.get("/api/v1/auth/register", register)

app.listen(PORT, () => {
	console.log(`server is running on port http://localhost:${PORT}`)
})
