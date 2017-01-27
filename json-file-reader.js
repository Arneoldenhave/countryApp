var fs = require('fs')

//arguments: './countries.json', onzefunctie
function jsonReader (filename, callback){ 
	fs.readFile(filename, 'utf-8', function(err, data) {
		if (err) throw err;
		var dataParsed = JSON.parse(data)
		callback(dataParsed) //de callback is onzefunctie

	})
}

module.exports = jsonReader