interface User3Interface {
    getFullName(): string;
}

// Classes are sugar around prototypes
class User implements User3Interface {
    // Private make it possible to just manipulate the data
    // inside the class
     
    private firstName: string;
    protected lastName: string;
    readonly unchangeableName: string;

    // Static properties are only accesible in the class itself
    // Not on instances

    static readonly maxAge = 50;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName;
    }

    changeUnchangeableName(): void {
        // this.unchangeableName = 'foo';
    }
    
    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}


class Admin extends User {
    private editor: string;

    setEditor(editor: string): void {
        this.editor = editor;
    }

    getEditor(): string {
        return this.editor;
    }
}

const user6 = new User("Roger", "Castro");
console.log(user6);

const admin = new Admin("Foo", "Bar");