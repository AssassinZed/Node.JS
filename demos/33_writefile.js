const fs = require('fs');

fs.writeFile('./text', 'This is a test', {
    encoding: 'utf8'
}, err => {
    if (err) throw err;
    console.log('done!');
})