const expressAsyncHandler = require("express-async-handler")
const Notification = require("../models/notificationModel")

exports.fetchUserNotifications = expressAsyncHandler(async (req, res, next) => {
	try {
		const userId = req.auth.id

		const userNotifs = await Notification.find({ to: userId })

		await Notification.updateMany({ to: userId }, { read: true })

		res.status(200).json(userNotifs)
	} catch (error) {
		next(error)
	}
})

exports.deleteNotifications = expressAsyncHandler(async (req, res, next) => {
	try {
		//1. params
		//2. find the noti
		//3. delete the noti

		const userId = req.auth.id
		await Notification.deleteMany({ to: userId })

		res.status(200).json({ msg: "Notifications deleted" })
	} catch (error) {
		next(error)
	}
})

exports.fetchNotifications = async (req, res) => {
	try {
		const notifications = await Notification.find()
			.populate("from", "username fullname")
			.populate("to", "username fullname")

		res.status(200).json({ notifications })
	} catch (error) {
		next(error)
	}
}
