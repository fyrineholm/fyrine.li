// Files and modules

const route = require("./route.js")

const http = require("http")
const url = require("url")

// HTTP server

http.createServer((req, res) => {
	// Access-Control-Allow-Origin

	res.setHeader("Access-Control-Allow-Origin", "*")

	// Handle requests

	if (req.method === "GET") {
		// Route request

		route(url.parse(req.url).pathname).then(response => {
			if (response.code === 200) {
				// Content-Type

				res.setHeader("Content-Type", response.mimeType)

				// Response

				res.writeHead(200)
				res.write(response.data)
				res.end()
			} else if (response.code === 404) {
				// 404 error

				res.writeHead(404)
				res.write("ERROR: 404 NOT FOUND")
				res.end()
			}
		}).catch(error => {
			// Internal error

			res.writeHead(500)
			res.write("ERROR: INTERNAL ERROR")
			res.end()

			throw error
		})
	} else {
		// Invalid request

		res.writeHead(400)
		res.write("ERROR: INVALID REQUEST")
		res.end()
	}
}).listen(8080)