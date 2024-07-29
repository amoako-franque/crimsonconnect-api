const asyncHandler = require("express-async-handler")

exports.register = asyncHandler(async (req, res) => {
	res.status(201).json({ msg: "Registration successful. Please login" })
})
exports.login = asyncHandler(async (req, res) => {
	res.status(202).json({ msg: "Successful login" })
})

exports.fetchUsers = asyncHandler(async (req, res) => {
	res.status(200).json({ users: "all users" })
})
