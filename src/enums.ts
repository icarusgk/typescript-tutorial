// Without Enumerals
const statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2,
};


console.log("First", statuses.inProgress);

// With Enumerals
enum Status {
    NotStarted,
    InProgress,
    Done,
}

enum Status2Enum {
    NotStarted = "notStarted",
    InProgress = "inProgress",
    Done = "done",
}
console.log(Status.InProgress);

// We can use enums as a data type too
let notStartedStatus: Status = Status.NotStarted;
// As a data type and later as a value

// And later change its value to one of the data types
notStartedStatus = Status.Done;


console.log(Status2Enum.InProgress);


// Enums with interfaces
interface Task { 
    id: string;
    status: Status2Enum;
}

const task: Task = {
    id: "5",
    status: Status2Enum.NotStarted,
}

console.log("Task", task.status);