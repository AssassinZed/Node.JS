const fs=require('fs');

fs.readdir('../',(err,files)=> {    //  读取上一层目录
    if(err) throw err;
    console.log(files);    //  [ '.git', '.vscode', 'demos', 'README.md' ]
})