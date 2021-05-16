// Interfaces help us create objects with some properties
interface UserInterface {
    name: string,
    age: number
}

interface User2 {
    name: string,
    age?: number; // When a property is not required inside an interface

    getMessage(): string
}

const user3: UserInterface = {
    name: "Roger",
    age: 20
};

const user4: User2 = {
    name: "Jack",
    getMessage() {
        return "Hello " + user4.name;
    }
};

console.log(user4.getMessage());