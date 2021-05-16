var someOther = document.querySelector('#bar');
someOther.addEventListener('blur', function (event) {
    var target = event.target;
    console.log('event', target.value);
});
// Use the 'as' operator to assert the type of the
// value we are going to work with, because
// Typescript doesn't know what is inside of out markup
