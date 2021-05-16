// Without Enumerals
var statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2
};
console.log("First", statuses.inProgress);
// With Enumerals
var Status;
(function (Status) {
    Status[Status["NotStarted"] = 0] = "NotStarted";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Done"] = 2] = "Done";
})(Status || (Status = {}));
var Status2Enum;
(function (Status2Enum) {
    Status2Enum["NotStarted"] = "notStarted";
    Status2Enum["InProgress"] = "inProgress";
    Status2Enum["Done"] = "done";
})(Status2Enum || (Status2Enum = {}));
console.log(Status.InProgress);
// We can use enums as a data type too
var notStartedStatus = Status.NotStarted;
// As a data type and later as a value
// And later change its value to one of the data types
notStartedStatus = Status.Done;
console.log(Status2Enum.InProgress);
var task = {
    id: "5",
    status: Status2Enum.NotStarted
};
console.log("Task", task.status);
