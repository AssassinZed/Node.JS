const { sep, delimiter, win32, posix } = require('path');

console.log('sep:', sep);    //  sep: \
console.log('posix sep:', posix.sep);    //  posix sep: /

console.log('PATH', process.env.PATH);    //  

console.log('delimiter:', delimiter);    //  delimiter: ;

console.log('posix delimiter', posix.delimiter);    //  posix delimiter :



