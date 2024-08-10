const express = require("express")
const authRouter = require("./routes/authRoutes")
const morgan = require("morgan")
const connectToDb = require("./config/dbConfig")
const { notFound, errorHandler } = require("./middlewares/handleErrors")
const postRouter = require("./routes/postRoutes")
const notificationsRouter = require("./routes/notificationsRoutes")
require("dotenv").config()
const PORT = process.env.PORT || 4789
// initialize express
const app = express()

// connect to database
connectToDb()

// middlewares
app.use(express.json()) // parse req.body data
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

// routes
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/post", postRouter)
app.use("/api/v1/notifications", notificationsRouter)

// error handler
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
	console.log(`server is running on port http://localhost:${PORT}`)
})
