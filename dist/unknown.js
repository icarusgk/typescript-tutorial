// An awesome alternative to type any
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
// We can't assign unknown directly in other type
// let s2: string = vUnknown;
// Type Assertion
// Convert one type to another
var s3 = vUnknown;
var pageNumber = '1';
var numericPageNumber = pageNumber;
// Typescript doesn't care about the data type 
console.log(vAny.foo());
// console.log(vUnknown.foo());
