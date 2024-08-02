const express = require("express")
const { createPost } = require("../controllers/postcontroller")
const requireSign = require("../middlewares/authMiddleware")
const postRouter = express.Router()

postRouter.post("/create", requireSign, createPost)

module.exports = postRouter
