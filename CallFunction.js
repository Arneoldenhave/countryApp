
var reader = require('./json-file-reader')
var country = process.argv[2];
var filename = './countries.json'


reader(filename, onzefunctie)

function onzefunctie (countriesJson) {
	for (var i = 0; i < countriesJson.length; i++) {
		if (country === countriesJson[i].name){
			console.log('Hello, my name is: ' + countriesJson[i].name);
			console.log('But you can call me: ' + countriesJson[i].topLevelDomain)
		}
	}
}