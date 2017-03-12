let [js, php, pu, rb] = ['JavaScript', 'PHP', 'Python', 'Ruby'];

console.log(js, php, pu, rb);

let scores = [3, 4, 5];
let [low, mid, high, higher = 15] = scores;
let [low1, , high1] = scores;
let [low2, ...rest] = scores;

console.log(low, mid, high, higher);
console.log(low1, high1);
console.log(low2, rest);

let scores1 = [3, 4, [5, 6]];
let [low3, mid3, high3, higher3] = scores1;
let [low4, mid4, [high4, higher4]] = scores1;

console.log(low3, mid3, high3, higher3);
console.log(low4, mid4, high4, higher4);

function computeScore([low, mid]) {
    console.log(low, mid);
}
computeScore([3, 4]);

function getScore() {
    return [3, 4, 5];
}
let [low5, mid5, high5] = getScore();
console.log(low5, mid5, high5);

let yes = 'Yes';
let no = 'No';
[yes, no] = [no, yes];
console.log('Yes is', yes);
console.log('No is', no);