// Files and modules

const util = require("./util.js")

const fs = require("fs")

// Routing

function route(path) {
	return new Promise((resolve, reject) => {
		// Pages

		if (path === "/") {
			// Home page

			util.read_file("public/index.html").then(home => {
				resolve({
					code: 200,
					mimeType: "text/html",
					data: home
				})
			}).catch(error => {
				reject(error)
			})
		} else if (path === "/favicon.png" || path === "/favicon.ico") {
			// Sample page

			util.read_file("public/loco.png").then(samplepage => {
				resolve({
					code: 200,
					mimeType: "image/png",
					data: samplepage
				})
			})
		}

		// Files

		else if (path.startsWith("/")) {
			// Find file

			path = path.substr(1)
			path = `public/${path}`
			if (fs.existsSync(path) && fs.lstatSync(path).isFile()) {
				// File

				util.read_file(path).then(file => {
					if (path.includes("/images")) {
						resolve({
							code: 200,
							mimeType: "image",
							data: file
						})
					} else {
						const ext = path.split(".")[path.split(".").length - 1]
						if (ext === "html") {
							resolve({
								code: 200,
								mimeType: "text/plain",
								data: file
							})
						} else {
							resolve({
								code: 200,
								mimeType: `text/${ext}`,
								data: file
							})
						}
					}
				}).catch(error => {
					reject(error)
				})
			} else {
				// File not found

				resolve({
					code: 404
				})
			}
		}

		// Not found

		else {
			resolve({
				code: 404
			})
		}
	})
}

// Exports

module.exports = route