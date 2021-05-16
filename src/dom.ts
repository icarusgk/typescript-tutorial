let page: any = "1";

// Convert it to string
let pageNumbeer = page as string;

const someElement = document.querySelector('.foo');
// Typescript doesn't know anything about our markup

// Element is the highest class in hierarchy
// Never do this
// console.log('someElement', (someElement as any).value);

// Fix
// We are saying this element is not generic
const someOtherElement = document.querySelector('.bar') as HTMLInputElement;
console.log("Some oher element", someOtherElement.value);
