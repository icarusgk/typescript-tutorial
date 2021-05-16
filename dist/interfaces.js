var user3 = {
    name: "Roger",
    age: 20
};
var user4 = {
    name: "Jack",
    getMessage: function () {
        return "Hello " + user4.name;
    }
};
console.log(user4.getMessage());
