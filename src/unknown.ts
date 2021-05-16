// An awesome alternative to type any
let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;

// We can't assign unknown directly in other type
// let s2: string = vUnknown;

// Type Assertion
// Convert one type to another
let s3: string = vUnknown as string;


let pageNumber: string = '1'
let numericPageNumber: number = pageNumber as unknown as number;

// Typescript doesn't care about the data type 
console.log(vAny.foo());


// console.log(vUnknown.foo());