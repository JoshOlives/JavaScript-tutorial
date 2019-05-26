(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("olive-palindrome");
let string = prompt("Please enter a string to test if palindrome")
let phrase = new Phrase(string);
if (phrase.palindrome(true, true)) {
    alert(`${phrase.content} is a palindrome.`);
}
else { alert(`${phrase.content} is not a palindrome.`) }
//alert(new Phrase(string).palindrome(true, true));
//alert(new Phrase("Madam, I'm Adam.").palindrome(true, true));
},{"olive-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

//adds reverse fun to String
String.prototype.reverse = function() {
    return Array.from(this).reverse().join(''); 
    //above better, works with emojis
    //return string.split('').reverse().join('');
};

String.prototype.blank = function() {
    // why didnt, this === ''; work? 
    if (this.match(/\S/)) {
        return false;
    }
    else {
        return true;
    }
};

Array.prototype.last = function() {
    return this.slice(-1);
};

function Phrase(content = '') {
    this.content = content;
    this.test;
    this.const = 'constant';
    
    //would have a throw exception here
    // what about prototype though
    if (typeof content !== "string") {
        console.log("DUDE TYPE AS STRING");
    }
    //first name matters not the one after funtion
    this.quiet = function quiet() {
        return this.content.toLowerCase();        /*if(typeof(strings) === "string") {
        return strings.toLowerCase();
        }
        else {
            console.log(this.content);
        }*/
    };
    
    //
    this.palindrome = function palindrome( sens = true, punc = false) {
        //ugly cause of options. look up case switch might be better though
        let judge = this.content;
        if (punc) {
            judge = this.letters();
        }
        if (sens) {
            judge = Phrase.quiet(judge);
        }
        return judge === judge.reverse();
        
        /*let judge = this.content;
        switch (true) {
            case(sens && punc):
                judge = Phrase.quiet(this.letters());
                return judge === judge.reverse();
            case(sens):
                judge = Phrase.quiet(judge);
                return judge === judge.reverse();
            case(punc):
                judge = this.letters();
                return judge === judge.reverse();
            default:
                return judge === judge.reverse();
        }*/
    };

    //works without this
    this.louder = function louder() {
        return this.content.toUpperCase();
    };
    
    //
    this.letters = function letters() {
        return this.content.split(/\W+|\s+|_+|\d+/g).join("");
    };
}

Phrase.quiet = function (strings) {
        if(typeof(strings) === "string") {
            return strings.toLowerCase();
        }
        else {
            console.log(`${typeof this.content} not valid`);
        }
};

console.log(Phrase.quiet('sSDSFSD'));

//doesnt work with case sensitive
function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;
    this.copy = content;
    this.mode = true;

//test if need to repeat name in funtion
//NOPE
    this.changeMode = function changeMode() {
        if (this.mode) {
        this.content = this.translation;
        this.translation = this.copy;
        this.mode = false;
        }
        else {
            this.translation = this.content;
            this.content = this.copy;
            this.mode = true;
        }
    };
    //overriding parent quiet function
    //this.quiet = function quiet() {
    //    return this.translation.toLowerCase();
    //};
}

TranslatedPhrase.prototype = new Phrase();

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
},{}]},{},[1]);
