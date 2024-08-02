// import mongoose from "mongoose"
const mongoose = require("mongoose")

const connectToDb = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URL)
		console.log("connected to db ...")
	} catch (err) {
		console.log("connection to mongodb failed")
		console.log({ err })
	}
}

module.exports = connectToDb
