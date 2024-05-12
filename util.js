// Modules

const fs = require("fs")

// Utility functions

function read_file(path) {
	return new Promise((resolve, reject) => {
		// Read file

		fs.readFile(path, (error, data) => {
			// Error

			if (error) {
				reject(error)
			}

			// File data

			if (path.endsWith(".json")) {
				resolve(JSON.parse(data))
			} else {
				resolve(data)
			}
		})
	})
}

// Exports

module.exports = {
	read_file: read_file
}