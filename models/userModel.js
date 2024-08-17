const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			minLength: [3, "Username length should be greater than 3"],
			maxLength: [15, "Username length should not be greater than 15"],
			lowercase: true,
		},
		fullname: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
			unique: true,
			lowercase: true,
		},
		searchHistory: {
			type: [String],
			default: [],
		},
		password: {
			type: String,
			required: true,
			trim: true,
			minLength: [8, "Please password length should not be less than 7"],
			select: false,
		},
		location: {
			type: String,
		},
		website: {
			type: String,
		},
		bio: {
			type: String,
		},
		bannerImg: {
			imgUrl: String,
			publicId: String,
		},
		profileImg: {
			imgUrl: String,
			publicId: String,
		},
		followers: [
			{
				type: Schema.Types.ObjectId,
				ref: "User",
				default: [],
			},
		],
		following: [
			{
				type: Schema.Types.ObjectId,
				ref: "User",
				default: [],
			},
		],
		// bookmarks
		bookmarks: [
			{
				type: Schema.Types.ObjectId,
				ref: "Post",
				default: [],
			},
		],
		isAdmin: {
			type: Boolean,
			default: false,
		},
		role: {
			type: String,
			default: "user",
			enum: ["user", "admin", "Super Admin"],
		},
		subscribed: {
			type: Boolean,
			default: false,
		},
		likedPosts: [
			{
				type: Schema.Types.ObjectId,
				ref: "Post",
				default: [],
			},
		],
	},
	{ timestamps: true }
)

// create indexes

const User = mongoose.model("User", userSchema)

module.exports = User
