const fs = require('fs');

fs.writeFile('./text', 'This is a test', {
    encoding: 'utf8'
}, err => {
    if (err) throw err;
    console.log('done!');
})

// // 当 data 参数为一个 buffer 时
// const fs = require('fs');
// const content = Buffer.from('This is a test');
// fs.writeFile('./text', content, err => {
//     if (err) throw err;
//     console.log('done!')
// })