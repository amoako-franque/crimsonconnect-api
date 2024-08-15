const cloudinary = require("cloudinary").v2
const fs = require("fs")
require("dotenv").config()

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
})

const uploadToCloudinary = async (pathToFileToUpload, folderName) => {
	try {
		const result = await cloudinary.uploader.upload(pathToFileToUpload, {
			folder: folderName,
		})

		fs.unlinkSync(pathToFileToUpload)

		return result
	} catch (error) {
		console.log({ error })
	}
}

module.exports = uploadToCloudinary
