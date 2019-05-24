function numberCompare(a,b) {
 if ( a > b ) {
 return 1;
} else if ( a < b) {
return -1;
} else {
 return 0;
    }
}
let a = [2,3,1,4,6,2,5,7,21,6,8,2,2];
a = a.sort(numberCompare);
console.log(a);