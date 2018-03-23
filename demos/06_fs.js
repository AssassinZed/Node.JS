const fs = require('fs');

const result = fs.readFile('./06_fs.js', (err, data) => {
	if (err) { console.log(err) }
	else { console.log(data.toString()) }
})

console.log(result);    //  undefined，因为是异步 I/O 操作，此种方式拿不到任何结果
