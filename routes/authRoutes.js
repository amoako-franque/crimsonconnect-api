const express = require("express")
const { register, login, fetchUsers } = require("../controllers/authController")
const authRouter = express.Router()

// http://localhost:4789/api/v1/auth/register :
authRouter.post("/register", register)
authRouter.post("/login", login)
authRouter.get("/users", fetchUsers)

module.exports = authRouter
