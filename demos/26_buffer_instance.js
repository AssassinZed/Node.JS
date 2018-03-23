/*
buf.length
buf.toString()
buf.fill()
buf.equals()
buf.indexOf()
buf.copy()
*/

const buf = Buffer.from('This is a test!');
console.log(buf.length);    //  15

const buf2 = Buffer.allocUnsafe(10);
buf2[0] = 2;
console.log(buf2.length);    //  10

console.log(buf.toString('base64'));    //  VGhpcyBpcyBhIHRlc3Qh

const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);    //  <Buffer d0 53 b1 60 07 02 00 00 80 54>
console.log(buf3.fill(10, 2, 6));    //  <Buffer d0 53 0a 0a 0a 0a 00 00 80 54>

const buf4 = Buffer.from('test');
const buf5 = Buffer.from('test');
const buf6 = Buffer.from('test!');

console.log(buf4.equals(buf5));
console.log(buf5.equals(buf6));

console.log(buf4.indexOf('es'));
console.log(buf4.indexOf('esa'));
























