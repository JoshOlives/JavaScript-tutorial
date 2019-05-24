
function palindrome(string, sens = false) {
    if (sens) {
    string = string.toLowerCase();
    }
    return string === reverse(string);
}
function reverse(string) {
    return Array.from(string).reverse().join(''); //better, works with emojis
    //return string.split('').reverse().join('');
}

console.log(palindrome('Bab bab', true));

function emailMaker(username, domain = "example") {
    return `${username.toLowerCase()}@${domain.toLowerCase()}.com`;
}
function emailParts(email) {
    //email.split(/\w+/);
    if (!email.includes('@')||!email.includes('.com')) {
        console.log('please enter a valid email');
    }
    let username = email.slice(0,email.indexOf('@')).toLocaleLowerCase();
    let domain = email.slice(email.indexOf('@')+1,email.indexOf('.com')).toLocaleLowerCase();
    return [username, domain];
}