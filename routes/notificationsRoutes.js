const express = require("express")
const {
	fetchUserNotifications,
	deleteNotifications,
	fetchNotifications,
} = require("../controllers/notificationsController")
const requireSign = require("../middlewares/authMiddleware")
const notificationsRouter = express.Router()

notificationsRouter.get("/", requireSign, fetchUserNotifications)
notificationsRouter.get("/user-notifs", fetchNotifications)
notificationsRouter.delete("/", requireSign, deleteNotifications)

module.exports = notificationsRouter
