console.log(Buffer.alloc(10));
console.log(Buffer.alloc(20));
console.log(Buffer.alloc(5, 1));
console.log(Buffer.allocUnsafe(5, 1));

console.log(Buffer.from([1, 2, 3]));    //  <Buffer 01 02 03>
console.log(Buffer.from('test'));    //  <Buffer 74 65 73 74>
console.log(Buffer.from('test', 'base64'));    //  <Buffer b5 eb 2d>
