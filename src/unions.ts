// Type aliases
type ID = string;
type PopularTag = string;

// This custom type is either PopularTag or null
type MaybePopularTag = PopularTag | null;

interface User2Interface {
    id: ID;
    name: string;
    surname: string;
}

// Makes it more understandable
const popularTags: PopularTag[] = ['dragon', 'coffee']
const dragons: MaybePopularTag = "Dragon";


// Union operator
let username: string = "Alex";

// Used to say a value can be of different types
let pageNummber: string | number = "1";

// To say it can be string or null
let errorMessage: string | null = null;

let user5: User2Interface | null = null;

// Not recommended
let someProp: string | number | null | undefined | string[] | object


