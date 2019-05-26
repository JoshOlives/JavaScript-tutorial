let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function urlIfy(string) {
    return string.toLowerCase().split(/\s+/).join('-');
}
function urlFriendly(arr) {
    let urlList = [];
    arr.forEach(x => urlList.push(urlIfy(x)));
    return urlList;
}
//console.log(urlFriendly(states));
//functional version
//need to return something in map, auto with the no {}
function functionalUrl(states) {
    return states.map( x =>  urlIfy(x));
}
//console.log(functionalUrl(states));

function urls(states) {
    return states.map( x => `https://example.com/${urlIfy(x)}`);
}
//console.log(urls(states));

function singleStates(states) {
    let single = [];
    states.forEach(x => { 
        if (x.split(/\s+/).length===1) {
            single.push(x);
        }
    });
    return single;
}
//console.log(singleStates(states));

//functional version
function functionalSingle(states) {
    return states.filter(x => x.split(/\s+/).length===1);
}
//console.log(functionalSingle(states));
function dakota(states) {
    return states.filter(x => x.toLowerCase().includes('dakota'));
}
//console.log(dakota(states));
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sum(arr) {
    let total = 0;
    arr.forEach(x => total += x);
    return total;
}
console.log(sum(numbers));

function functionalSum(arr) {
    return arr.reduce((total,x) => {return total += x}, 0); // 0 is default
}
console.log(functionalSum(numbers));

function lengths(states) {
    let lengths = {};
    states.forEach(x => lengths[x] = x.length);
    return lengths;
}
console.log(lengths(states));

function functionalLengths(states) {
    return states.reduce((lengths,x) => {lengths[x] = x.length;
        return lengths;
    }, {});
}
console.log(functionalLengths(states));

function product(arr) {
    return arr.reduce((total,x) => {return total *= x}, arr[0]);
}
console.log(product(numbers));