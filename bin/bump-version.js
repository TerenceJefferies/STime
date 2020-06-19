const fs = require('fs');

fs.readFile(__dirname + '/../package.json', (error, content) => {
	const data = JSON.parse(content);
	data.version = process.argv[2];
	fs.writeFileSync(__dirname + '/../package.json', JSON.stringify(data, null, "\t"));
});