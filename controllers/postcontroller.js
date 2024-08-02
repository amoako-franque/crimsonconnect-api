const expressAsyncHandler = require("express-async-handler")
const Post = require("../models/postModel")

exports.createPost = expressAsyncHandler(async (req, res, next) => {
	// check if user is authenticated
	// req.auth => data of the current logged in user
	// req.body => text
	const { text } = req.body

	if (!text) {
		return res.status(400).json({ error: "Please enter text" })
	}

	const userId = req?.auth?.id

	if (!userId) {
		return res
			.status(401)
			.json({ error: "Unauthorized. Please login to continue" })
	}

	try {
		const post = await Post.create({
			text,
			user: userId,
		})

		res.status(201).json({ msg: "Post created", post })
	} catch (error) {
		next(error)
	}
})

// write a controller to fetch all posts. ensure that only logged in users can view posts
