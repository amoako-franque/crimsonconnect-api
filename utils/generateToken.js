const jwt = require("jsonwebtoken")

const generateToken = (userId) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
		expiresIn: process.env.JWT_EXPIRE,
	})

	return token
}

module.exports = generateToken
