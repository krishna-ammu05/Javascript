function myfun(){
    console.log("welcome");
    console.log("To my world");
}
myfun();
//functions with parameter
function para(msg){//parameter
    console.log(msg);
}
para("I Love JS");//arugement

//Function two cal sum of two
function sum(x,y){
    //local vars
    s=x+y;
    return s;
}

let val = sum(90,10);
console.log(val);


//Sum using Arrow function
const arrowSum = (a,b) =>{
    console.log(a+b);
}

const printHello = () =>console.log("hello");


//function that takes string as a argument and returns the no.of vowels in the string
function countVowels(str){
    let count =0;
    for (const char of str){
        if(char==='a'||
            char==='e'||
            char==='i'||
            char==='o'||
            char==='u'||
            char==='A'||
            char==='E'||
            char==='I'||
            char==="O"||
            char==="U"
        ){
        count++;
    }
}

console.log(count);
}
countVowels("krishnaaa");

const arrowCV =(str)=>{
    let count =0;
    for (const char of str){
        if(char==='a'||
            char==='e'||
            char==='i'||
            char==='o'||
            char==='u'||
            char==='A'||
            char==='E'||
            char==='I'||
            char==="O"||
            char==="U"
        ){
        count++;
    }
}

console.log(count);
}
countVowels("krishnaA");

let arr = ['apple','banana','cherry','orange'];
arr.forEach((val,index,arr) =>{
    console.log(val.toUpperCase(),index,arr);
})
    
//Squares
let nums=[11,15,17,18,19];

let calSquare= (num) =>{
    console.log(num*num);

};
nums.forEach(calSquare);

//map() method:
let newArr = nums.map((val)=>{
    return val * val;
}) ;
console.log(newArr);

//Filter(): method
let arr1 =[1,2,3,4,5,6,7];
let evenArr = arr1.filter((val) =>{
    return val% 2 !==0;
});
console.log(evenArr);

//REduce()method:
let array =[5,6,2,1,101,3];
const output = array.reduce((prev,curr)=>{
    return prev<curr?prev:curr;
});
console.log(output);

//
let n = prompt("Enter a num:");
let Arr =[];
for(let i =1;i<=n;i++){
    Arr[i-1]=i;
}
console.log(Arr);
let Sum = Arr.reduce((res,curr)=>{
    return res+curr;
});

console.log(Sum);