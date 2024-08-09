const jwt = require("jsonwebtoken")
const User = require("../models/userModel")
const requireSign = async (req, res, next) => {
	const authHeader = req.headers?.authorization || req.headers?.authorisation

	const token = authHeader?.split(" ")[1]

	if (!token) {
		return res
			.status(401)
			.json({ error: "Unauthorized. Please login to continue" })
	}

	const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY)

	if (!decodedToken) {
		return res.status(401).json({ error: "Unauthorized. Invalid token" })
	}

	const userId = decodedToken?.userId

	const user = await User.findById(userId)

	if (!user) {
		return res.status(401).json({
			error:
				"Unauthorized. User not found. Please register and login to continue",
		})
	}

	req.auth = user

	next()
}

module.exports = requireSign
