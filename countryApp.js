// // Exercise

// console.log(Username)
// console.log(password)




// // Country Information App


// // Part 1 Create a Node.js application that does the following:
//  
// //node countryApp.js Germany

// console.log(process.argv[2])



// Takes in one parameter from the command line, the name of a country. Note: command line arguments can be read from the global array process.argv
// --> 1st: you need the file(slack). 2nd; reads and parses.


// Reads and parses the countries.json file. Note: you must use readFile and not readFileSync.
//--> Read: readfiel is a call so: 
// var fs = require('fs')

// fs.readFile('countries.json', 'utf-8', function(err, data) {
// 	if (err) throw err
// process.argv(country)

// 	//do what we want
// 	//it needs to be pars-ed(disected)

// });

// console.log(process.argv[2])


var fs = require('fs');

fs.readFile('./countries.json', 'utf-8', function(err, data) {
	if(err) {
		throw(err);
	}

	var country = process.argv[2];
	console.log(country);


	var parseData = JSON.parse(data);

	for(var i = 0; i < parseData.length; i++) {
		if (country === parseData[i].name) {
			console.log(parseData[i].topLevelDomain)
		}
	}
})






// var objectarray = [{"key1": "value1"}]



	
// 	// var parseData = JSON.parse(data) //hier zit die hele zooi in
// console.log(parsdeData[0])


// 	console.log(parseData[0]) //console log variabelen altijd als je niet helemaal weet wat ze zijn *altijd*, nee echt, doe het!

// 	// for(var i = 0; i < ??; i++){
// 	// 	console.log(parsdeData[0])
// 	// }

// })
 // console.log()

// Part 1 Create a Node.js application that does the following:

// Takes in one parameter from the command line, the name of a country. Note: command line arguments 
// can be read from the global array process.argv
// Reads and parses the countries.json file. Note: you must use readFile and not readFileSync.
// Outputs information about that specific country. Must be in the following format:
// Country: Netherlands Top Level Domain: .nl





// console.Level(fs);
//now for the pars part. --. assignmet does not teel us how to disect it(ask melvin).
//


// Outputs information about that specific country. Must be in the following format:
// Country: Netherlands Top Level Domain: .nl

//output means output on the terminal(console.log)
// 



// van stack overflow: asynchronous function loading local files
// });

