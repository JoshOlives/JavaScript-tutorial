function spit(array) {
    if (typeof(array)=== 'object')
        array.forEach(ele => { // brackets optional
            console.log(ele);
        });
    else
    {
        console.log('pls enter valid array');
    }
}
spit(["bat", 3, "cat"]);
spit('s');
let s = "HI WILL YOU";
spit(Array.from(s));
