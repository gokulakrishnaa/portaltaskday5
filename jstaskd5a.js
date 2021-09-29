//Task Day 5 (Q.2)
//1.
var num = 10;
function addFive(num) { 
    num += 5;
    return num;
}
var result = addFive(num)
console.log(result);

//2.
var num = -53;
function getOpposite(num) {
   if(num == -Number){
       return Math.abs(num)
   } else {
       return -num 
   }
}
console.log(getOpposite(num));

//3.
var min = 5;
function toSeconds(min) {
    let sec = min * 60;
    return sec;
}
console.log(toSeconds(min));

//4.
var mystr = "5";
function toInteger(mystr) {
    let str = parseInt(mystr);
    return str;
}
console.log(toInteger(mystr));

//5.
var myint = -2;
function nextNumber(myint) {
    let nxt = myint + 1;
    return nxt;
}
console.log(nextNumber(myint));

//6.
var arr = [1, 2, 3];
function getFirstElement(arr) {
    let first = arr[0];
    return first;
}
console.log(getFirstElement(arr));

//7.
function hourToSeconds(hr) {
    let secs = hr * 60;
    return secs;
}
console.log(hourToSeconds(4));

//8.
function perimeterRect(l, w){
    let peri = 2 * (l + w);
    return peri;
}
console.log(perimeterRect(5, 6));

//9.
function lessThan100(num1,num2) {
    let total = num1 + num2;
    if(total<100){
        return true;
    }else {
        return false;
    }
}
console.log(lessThan100(22,15));

//10.
function remainder(num1,num2) {
    let rem = num1 % num2;
    return rem;
}
console.log(remainder(1,3));

//11.
function CountAnimals(tur,horse,pigs) {
    let totalLegs = (tur * 2) + (horse * 4) + (pigs * 4);
    return totalLegs;
}
console.log(CountAnimals(2,3,5));

//12.
function frames(num1,num2) {
    let fps = num1 * (num2 * 60);
    return fps;
}
console.log(frames(1,2));

//13.
function divisibleByFive(num1) {
    if(num1 % 5 == 0){
        return true
    } else {
        return false
    }
}
console.log(divisibleByFive(53));

//14.
function isEven(num) {
    if(Number.isInteger(num)){
        if(num % 2 == 0){
            return true
        } else {
            return false
        }
    } else {
        return "-1"
    }    
}
console.log(isEven(26));

//15.
function areBothOdd(num1, num2){
    if (num1 % 2 !== 0 && num2 % 2 !== 0) {
        return true
    } else {
        return false
    }
}
console.log(areBothOdd(3, 5));

//16.
function getFullName(firstName, lastName){
    let fullN = firstName + " " + lastName;
    return fullN
}
console.log(getFullName("gokula", "krishnaa"));

//17.
function getLengthOfWord(word1){
    if(Number.isInteger(word1)){
        return -1;
    } else {
        let len1 = word1.length ;
        return len1; 
    }
}
console.log(getLengthOfWord("stevejobs"));
console.log(getLengthOfWord(""));
console.log(getLengthOfWord(9));

//18.
function getDistance(x1, y1, x2, y2){
    let dist1 = y1 - x1;
    let dist2 = y2 - x2;
    console.log(Math.abs(dist1), Math.abs(dist2));
}
getDistance(100, 200, 600, 300);

//19.
function getNthElement(array,n){
    let element = array[n];
    return element; 
}
console.log(getNthElement([1,4,5,7,8], 3));

//20.
function getLastElement(array){
    if(array.length == 0){
        return "-1";
    } else {
        let last = array[array.length - 1];
        return last;
    }    
}
console.log(getLastElement([2,3,4,5,6]));

console.log("**********************");

//21.
var obj1 = {
    name1: "Steve",
    id: 345,
    place: "USA"
   };
console.log(obj1.name1);
console.log(obj1.city);

//22.
var obj = {
    fName : "elon"
};

obj["lName"] = "musk";
console.log(obj);

//23.
var obj2 = {
    name1: "Steve",
    id: 345,
    place: "USA"
};
delete obj2.id;
console.log(obj2);

//24.
var arr10 = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var tempArr = [];
var resArr1 = [];
var resSum = 0;
function countPositivesSumNegatives(arr) {
    for(let i=0; i<arr.length; i++){
        if(arr[i]>0){
            tempArr.push(arr[i]);
        }else {
            resSum += arr[i];
        }
    }
    resArr1[0] = tempArr.length;
    resArr1[1] = resSum;
    console.log(resArr1);
}
countPositivesSumNegatives(arr10);

//25.
var ar5 = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar6 = [];
function getPositives(arr){
    for (let i=0; i<arr.length; i++){
        if(arr[i] > 0){
            ar6.push(arr[i]);
        }
    }
    return ar6;
}
console.log(getPositives(ar5));

//26.
let powArr = [];
function powersOfTwo(n){
  for(let i=0; i<=n; i++){
    var res = Math.pow(2,i);
    powArr.push(res);
  }
  return powArr.join(",");
}
console.log(powersOfTwo(3));

//27.
var ar11 = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function findMax(ar)
{
    let tempMax = Math.max(...ar);
    return tempMax;
}
var max = findMax(ar11);
console.log("Max: ", max);

//28.
function isPrime(){
    for (let p=0; p<=100; p++){
        let flag = 0;
        for(let i=2; i<p; i++){
            if(p % i == 0){
                flag = 1;
            }
        }
        if (p > 1 && flag == 0) {
        console.log(p);
    }
}
}
isPrime();

console.log("*******************")

//29.
function isPrime1(start, end){
    for (let i = start; i <= end; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            console.log(i);
        }
    }
}

isPrime1(10, 100);

//30.
function reverseString(s)
{
  let rev = s.split("").reverse().join("");
  return rev; 
}
console.log(reverseString("JavaScript"));

//31.
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
function mergeArray(arr1, arr2){
    let res = arr1.concat(arr2);
    console.log(res);
}
mergeArray(ar1, ar2);

//32.
function sumCSV(s){
    let toNum = s.split(",");
    let sum = 0;
    for(let i=0; i<toNum.length; i++){
        sum += +toNum[i];
    }
    return sum;
}
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));







