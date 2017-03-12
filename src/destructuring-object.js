let person = {
    firstName: 'John',
    lastName: 'Doe'
};

let {firstName, lastName, age = 25} = person;
let {firstName: first, lastName: last} = person;
let {['first' + 'Name']: first1, ['last' + 'Name']: last1} = person;

console.log(firstName, lastName, age);
console.log(first, last);
console.log(first1, last1);

let user = {
    firstName: 'John',
    lastName: 'Doe',
    social: {
        facebook: 'johndoe',
        twitter: 'jdoe'
    }
};
let {firstName: first2, lastName: last2, social: {facebook: fb}} = user;
console.log(first2, last2, fb);

function post(url, {data: {firstName, lastName}, cache}) {
    console.log(url, firstName, lastName, cache);
}
let result = post('api/users', {data: user, cache: false});

function getUserInfo() {
    return user;
}
let {firstName: first3, lastName: last3, social: {twitter}} = getUserInfo();
console.log(first3, last3, twitter);