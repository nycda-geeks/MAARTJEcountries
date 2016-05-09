var fs = require('fs');
var input = process.argv[2]

fs.readFile('./countries.json', 'utf8', function (err, data) {
	if (err)throw err;
	var obj = JSON.parse(data);
	
	for (var i=0; i<obj.length; i++) {

		if (obj[i].name == input){

			console.log("name: " + obj[i].name);
			console.log("top Level Domain: " + obj[i].topLevelDomain)
			
		}
	}
});



