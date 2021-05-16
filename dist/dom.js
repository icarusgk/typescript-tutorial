var page = "1";
// Convert it to string
var pageNumbeer = page;
var someElement = document.querySelector('.foo');
// Typescript doesn't know anything about our markup
// Element is the highest class in hierarchy
// Never do this
// console.log('someElement', (someElement as any).value);
// Fix
// We are saying this element is not generic
var someOtherElement = document.querySelector('.bar');
console.log("Some oher element", someOtherElement.value);
