const fs=require('fs');

fs.stat('./34_stat.js', (err,stats) => {
    if(err) {
        console.log('文件不存在');
        return;
    }
    console.log(stats.isFile());    //  true
    console.log(stats.isDirectory());    //  false
    console.log(stats);    //  Stats {dev: 10824349,mode: 33206,nlink: 1,uid: 0,gid: 0,rdev: 0,blksize: undefined,ino: 9570149208323588,size: 249,blocks: undefined,atimeMs: 1521605331438.2434,mtimeMs: 1521605331440.2485,ctimeMs: 1521605331440.2485,birthtimeMs: 1521605331438.2434,atime: 2018-03-21T04:08:51.438Z,mtime: 2018-03-21T04:08:51.440Z,ctime: 2018-03-21T04:08:51.440Z,birthtime: 2018-03-21T04:08:51.438Z }
})