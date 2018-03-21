const fs=require('fs');

fs.readFile('./32_readfile.js','utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
})

const data=fs.readFileSync('./01_run.js', 'uft8');    //  尽管同步写在下面，但仍旧优先执行。尽管如此，我们还是推荐使用异步
console.log(data);