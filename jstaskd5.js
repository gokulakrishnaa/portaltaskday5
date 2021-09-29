//Task Day 5 (Q.1)
//a.
//anonymous
let arr = [2,4,7,67,53,22,9];
const a = function () {
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 !== 0){
           console.log(arr[i]);
        }
    }
}
a();
//IIFE
(function () {
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 !== 0){
           console.log(arr[i]);
        }
    }
})();

//b.
//anonymous
let arrStr = ["elon","steve","bill","mark","jeff"];
const firstCap = function() {
    for(let i=0; i<arrStr.length; i++) {
       var a1 = arrStr[i].charAt(0).toUpperCase() + arrStr[i].slice(1);
       console.log(a1);
    }
}
firstCap();
//IIFE
(function() {
    for(let i=0; i<arrStr.length; i++) {
       var a1 = arrStr[i].charAt(0).toUpperCase() + arrStr[i].slice(1);
       console.log(a1);
    }
})();

//c.
//anonymous
let arrSum = [2,4,7,67,53,22,9];
let sum = 0;
const sumNum = function(){
    for(let i=0; i<arrSum.length; i++){
        sum = sum + arrSum[i];
    }
    console.log(sum);
}
sumNum();
//IIFE
(function(){
    for(let i=0; i<arrSum.length; i++){
        let sum = 0;
        sum = sum + arrSum[i];
    }
    console.log(sum);
})();

//d.
//anonymous
let arrPrim = [2,4,7,67,53,22,9];
let primOnly1 = [];
const primCheck = function (n){
    if(n < 2)
        return false

    for(let i=2; i<n; i++){
            if(n % i === 0){
                return "F"
            }
        }
        primOnly1.push(n);
    }

    for(let k=0; k<arrPrim.length; k++){
    primCheck(arrPrim[k]);
}
console.log(primOnly1);

//IIFE
let arrPrim1 = [2,4,7,67,53,22,9];
let primOnly = [];
for(var k=0; k<arrPrim.length; k++){
    (function() {
        if(arrPrim1[k] < 2)
            return false
    
        for(let i=2; i<arrPrim1[k]; i++){
                if(arrPrim1[k] % i === 0){
                    return "F"
                }
            }
        primOnly.push(arrPrim1[k]);
    })();
}
console.log(primOnly);

//e.
//anonymous
let palinOnly = [];
const palin = function(str) {
    for(let i=0; i<str.length/2; i++){
        if(str[i] !== str[str.length - 1 - i]){
           return "not palindrome" 
        }
    }
    palinOnly.push(str);
}
const palinArr = ["civic","even","nitin","malayalam"];
for(let p=0; p<palinArr.length; p++){
    palin(palinArr[p]);
}
console.log(palinOnly);

//IIFE
const palinArr1 = ["civic","even","nitin","malayalam"];
let palinOnly1 = [];
for(let p=0; p<palinArr.length; p++){
    (function() {
        for(let i=0; i<palinArr1[p].length/2; i++){
            if(palinArr1[p][i] !== palinArr1[p][palinArr1[p].length - 1 - i]){
               return "not palindrome" 
            }
        }
        palinOnly1.push(palinArr1[p]);
    })();
}
console.log(palinOnly1);

//f.
//anonymous
let arr01 = [2,5,6,8,9];
let arr02 = [4,5,3,7,8];

const medianSortArray = (num1,num2) => {
  let compare = (a,b) => {
    return a - b
  }
  let arr = num1.concat(num2).sort(compare);
  if(arr.length % 2 == 0){
    return (arr[arr.length/2 -1] + arr[arr.length/2]) / 2;
  }
  return arr[Math.floor(arr.length/2)];
}
console.log(medianSortArray(arr01,arr02));

//IIFE
(function (num1,num2) {
    let compare = (a,b) => {
      return a - b
    }
    let arr = num1.concat(num2).sort(compare);
    if(arr.length % 2 == 0){
      console.log((arr[arr.length/2 -1] + arr[arr.length/2]) / 2);
    } else {
    console.log(arr[Math.floor(arr.length/2)]);
    }
})(arr01,arr02);

//g.
//anonymous
const dupArr = [1,2,4,5,2,4];
const removeDup = function() {
  let finalArr = [];
  for(var ind of dupArr){
    if(finalArr.indexOf(ind) == -1){
      finalArr.push(ind);
    }
  }
  console.log(finalArr);
}
removeDup();

//IIFE
(function() {
  let finalArr = [];
  for(var ind of dupArr){
    if(finalArr.indexOf(ind) == -1){
      finalArr.push(ind);
    }
  }
  console.log(finalArr);
})();

//h.
//anonymous
let rotArr = [1,2,3,4,5,6,7,8];
let rotate = function(arr, k){
  for(let i=0; i<k; i++){
    arr.unshift(arr.pop());
  }
  return arr
}
console.log(rotate(rotArr,2));

//IIFE
let rotArr1 = [1,2,3,4,5,6,7,9];
(function(arr, k){
  for(let i=0; i<k; i++){
    arr.unshift(arr.pop());
  }
  console.log(arr);
})(rotArr1,3);



//Task day 5 (Q.3)
//a.
let arrArrow = [2,4,7,67,53,22,9];
const a1 = arrArrow.filter((odd) => {
    if(odd % 2 !== 0){
        console.log(odd);
    }
});

//b.
let strArray = ["elon","steve","bill","mark","jeff"];
const b1 = strArray.map((cap) => {
    let capRes = cap.charAt(0).toUpperCase() + cap.slice(1);
    console.log(capRes);
});

//c.
let arrowSum = [2,4,7,67,53,22,9];
const sumOf = arrowSum.reduce((sum,curr) => sum+curr, 0);
console.log(sumOf);

//d.
var numArray = [2,4,7,67,53,22,9];
numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
console.log(numArray);

//e.
const palinArrow = ["civic","even","nitin","odd"];
const arrowArr = [];
const chkPalin = palinArrow.filter((check) => {
  for(let i=0; i<check.length/2; i++){
    if(check[i] !== check[check.length - 1 - i]){
       return "not palindrome" 
    }
  }
  arrowArr.push(check);
});
console.log(arrowArr);


