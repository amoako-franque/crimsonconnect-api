const express = require("express")
const fileUpload = require("express-fileupload")
const path = require("path")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(fileUpload({ createParentPath: true }))

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"))
})

app.post("/upload", (req, res) => {
	if (req.files === null) {
		return res.status(400).json({ msg: "No file uploaded" })
	}

	const file = req.files.myFile

	const path = __dirname + "/files/" + file.name //

	file.mv(path, (err) => {
		if (err) {
			console.error(err)
		}

		res.send({ msg: "File uploaded", path: path })
	})
})

const port = 7900

app.listen(port, () => {
	console.log(`server is running on port http://localhost:${port}`)
})
