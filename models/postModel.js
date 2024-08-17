const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate-v2")
const Schema = mongoose.Schema

const postSchema = new Schema(
	{
		text: {
			type: String,
			required: true,
			trim: true,
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		likes: [
			{
				type: Schema.Types.ObjectId,
				ref: "User",
				default: [],
			},
		],
		postImg: {
			imgUrl: String,
			publicId: String,
		},
		comments: [
			{
				comment: {
					type: String,
					require: true,
				},
				user: {
					type: Schema.Types.ObjectId,
					ref: "User",
					require: true,
				},
			},
		],
	},
	{ timestamps: true }
)

postSchema.method("toJSON", function () {
	const { __v, _id, ...object } = this.toObject()
	object.id = _id
	return object
})

postSchema.plugin(mongoosePaginate)
const Post = mongoose.model("Post", postSchema)
module.exports = Post
