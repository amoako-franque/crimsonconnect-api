const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")

exports.register = asyncHandler(async (req, res, next) => {
	const fullname = req.body.firstname + " " + req.body.lastname
	try {
		const user = await User.create({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password,
			fullname,
		})
		res.status(200).json({ msg: "Registered", user })
	} catch (error) {
		next(error)
	}
})
exports.login = asyncHandler(async (req, res) => {
	res.status(202).json({ msg: "Successful login" })
})

exports.fetchUsers = asyncHandler(async (req, res) => {
	const users = await User.find()
	res.status(200).json({ users })
})
