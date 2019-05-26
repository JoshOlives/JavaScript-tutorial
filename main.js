let Phrase = require("olive-palindrome");

function palindromeTester() {
    //makinig form not refresh
    event.preventDefault();
    let string = event.target.phrase.value;
    let phrase = new Phrase(string);
    let result = document.getElementById("result");
    if (phrase.palindrome(true, true)) {
        result.innerHTML = `"<strong>${phrase.content}</strong>" is a palindrome.`;
    }
    else { 
        result.innerHTML = `"<strong>${phrase.content}</strong>" is not a palindrome.`; 
        }
    }

document.addEventListener("DOMContentLoaded", function() {
    let tester = document.querySelector("#palindromeTester");
    tester.addEventListener("submit", function(event) {
        palindromeTester(event); 
    });
});
//alert(new Phrase(string).palindrome(true, true));
//alert(new Phrase("Madam, I'm Adam.").palindrome(true, true));