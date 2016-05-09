var filesystem = require('fs')

function unicornParse () {
filesystem.readFile('data.json', function(err, unicorn){
	if (err) {
		console.log("error")
		}
		console.log(JSON.parse(unicorn))

})

}

module.exports.unicornParse = unicornParse