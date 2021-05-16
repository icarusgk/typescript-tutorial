// Is not as popular as other types

// Function with never can't be executed to the end
// Is a function that NEVER ends
const doSomee = (): never => {
    throw "never";
    console.log("doSomee");
}