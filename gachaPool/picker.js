//Pool generator from pool.txt

const fs = require('fs');
const request = require('request');

async function getRequest(url) {
  const options = {
    url: url,
    method: 'GET',
  };

  // Return new promise
  return new Promise(function(resolve, reject) {
    // Do async job
    request.get(options, function(err, resp, body) {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    })
  })
}

(async function() {
	if(fs.existsSync('pool.txt')) {
		let fileName = 'NORM_EN_6_0_2';
		let pool =  fs.readFileSync('pool.txt','utf8');
		var line = pool.split("\r\n");
		let regex = /(?<=\[).+?(?=\])/;
		let finalPool = [];
		let tempPool = [];
		//let character_table = JSON.parse(await getRequest('https://raw.githubusercontent.com/Dimbreath/ArknightsData/master/en-US/gamedata/excel/character_table.json'));
    let character_table = fs.readFileSync('../data/character_table.json');
		for(var i=0;i<line.length;i++) {
			if(regex.test(line[i])) {
				if(tempPool.length > 0) finalPool.push(tempPool);
				tempPool = [];
				continue;
			}
			for(var k in character_table) {
				if(character_table[k].name == line[i]) {
					tempPool.push(k);
					break;
				}
			}
			if(i==line.length-1) finalPool.push(tempPool)
		}
		
		fs.writeFile(fileName+'.json', JSON.stringify(finalPool), 'utf8', function (err) {
    		if (err) {
        	console.log("An error occured while writing JSON Object to File.");
        	return console.log(err);
    		} else {
    			console.log("OK");
    		}
		});
	}
})();