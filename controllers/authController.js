const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const User = require("../models/userModel")
const generateToken = require("../utils/generateToken")

exports.register = asyncHandler(async (req, res, next) => {
	// validate user input
	const { username, email, password, fullname } = req.body

	if (!username || !email || !password || !fullname) {
		return res.status(400).json({ error: "Please enter all fields" })
	}
	const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

	if (!validEmail.test(email)) {
		res.status(400).json({ error: "Please enter a valid email address" })
		return false
	}

	if (password.length < 8) {
		return res
			.status(400)
			.json({ error: "Password must be at least 8 characters" })
	}

	// check if user already exists using username and email
	// const existingUser = await User.find({ email })

	const userExists = await User.findOne({ $or: [{ username }, { email }] })

	if (userExists) {
		return res
			.status(400)
			.json({ error: "User already exists with username or email provided" })
	}

	// hash user password with bcryptjs

	const salt = await bcrypt.genSalt(10)

	const hashPassword = await bcrypt.hash(password, salt)

	try {
		const user = await User.create({
			username,
			email,
			password: hashPassword,
			fullname,
		})
		res.status(200).json({ msg: "Registered", user })
	} catch (error) {
		next(error)
	}
})

exports.login = asyncHandler(async (req, res, next) => {
	try {
		// validate inputs
		const { username, email, password } = req.body

		if ((!username && !email) || !password) {
			return res.status(400).json({ error: "Please enter username or email" })
		}

		const user = await User.findOne({ $or: [{ username }, { email }] }).select(
			"password"
		)

		if (!user) {
			return res.status(400).json({ error: "User not found" })
		}

		// compare password
		const isMatch = await bcrypt.compare(password, user.password)

		if (!isMatch) {
			return res.status(400).json({ error: "Invalid credentials" })
		}

		const token = generateToken(user.id)

		res.status(200).json({ msg: "Logged in", token })
	} catch (error) {
		next(error)
		// res
		// 	.status(500)
		// 	.json({ error: "Internal server error. Please try again later." })
	}
})

exports.fetchUsers = asyncHandler(async (req, res) => {
	const users = await User.find()
	res.status(200).json({ users })
})
