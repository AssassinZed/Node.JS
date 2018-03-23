const path = require('path');
const mod = require('./02_cusmod');

console.log(mod.testVar);    //  
console.log('__dirname    ', __dirname);    //  C:\Users\Assassin\Documents\GitHub\Node.JS\demos
console.log('process.cwd()', process.cwd());    //  C:\Users\Assassin\Documents\GitHub\Node.JS\demos
console.log('./           ', path.resolve('./'));    //  C:\Users\Assassin\Documents\GitHub\Node.JS\demos

