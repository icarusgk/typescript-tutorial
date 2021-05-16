// Without Generic
const addId = obj => {
    const id = Math.random().toString(16);
    return {
        ...obj,
        id
    };
};

// With Generic
// All generic data types are written inside <>
// Inside the <> is the type that was passed

const addIdGeneric = <T>(obj: T) => {
    const id = Math.random().toString(16);
    return {
        ...obj,
        id
    };
};

// Defining it to be an object
const addIdGenericObject = <T extends object>(obj: T) => {
    const id = Math.random().toString(16);
    return {
        ...obj,
        id
    };
};


interface UserInterface4 {
    name: string;
}



const user8: UserInterface4 = {
    name: 'Jack'
}

const result = addId(user8);


// Implicitly
const result2 = addIdGeneric(user8);

// Explicitly
const result3 = addIdGeneric<UserInterface4>(user8);

// Whatever we want
const result4 = addIdGeneric<string>("foo");

// Defining it to accept just objects
const result5 = addIdGenericObject<UserInterface4>(user8);


console.log("result", result);


// NEWWWW
// Interfaces with Generics
// To make interface generic we add <T> after the name

interface UserInterface5<T> {
    name: string;
    data: T;
}

const user9: UserInterface5<{meta: string}> = {
    name: "Jack",
    data: {
        meta: "foo"
    },
};

const user10: UserInterface5<number> = {
    name: "Roger",
    data: 10,
};

const user11: UserInterface5<string[]> = {
    name: "Kai",
    data: ["Kerin", "Hello"],
};

// Interface with multiple data types
interface UserInterface6<T, V> {
    name: string;
    data: T,
    meta: V;
}

const user12: UserInterface6<string[], number> = {
    name: "Jack",
    data: ["a", "b", "c"],
    meta: 10,
};


// function append<T>(el: T, list: readonly T[]): T[];
// append("baz", ["foo", "bar"]);
// return the list 