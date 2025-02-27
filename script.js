// // Log a message to the console
// console.log("External JavaScript file is linked!");

// // Function to display an alert when the button is clicked
// function showMessage() {
//     alert("Button clicked! JavaScript is working.");
// }
console.log("krishna")
console.log("krishna")
console.log("krishna")
//Array is object type
let marks=[67,90,89,67,56];
console.log(marks);
console.log(marks.length)
let sum =0;
for(let val of marks){
    sum=sum+val;
}

let avg=sum/marks.length
console.log(avg);
 

let heroes =['ironman','thor','hulk','shakthiman','spiderman'];
console.log (heroes);  
//for string with using in index we cant change
 heroes[0]

//LOOPING OVER AN ARRAY
// print all elements of an array
// for(i=0;i<heroes.length;i++){
//     console.log(heroes[i]);
// }

let cities = ['delhi','hyd','mumbai','pune','mncl']
for (let city of cities){
    console.log(city.toUpperCase());
}
console.log(cities);
console.log(cities.toString)
//Array methos
//Push():add to end
//Pop():delete from end & return
//toString()
//CONCAT():joins multiple array and return result
let fruits =['apple','banana','cherry','orange'];
let veg=['carrot','onion','chilli','tomato']

let market =fruits.concat(veg);
console.log(market);

//UNSHIFT():add to start
fruits.unshift('pineapple');
console.log(fruits);

//SHIFT():pop to delete an item
fruits.shift('pineapple');
console.log(fruits);

//slice():returns a piece of the array
//slice(stidx,stopidx)

console.log(fruits.slice(0,4));
console.log(fruits.slice(2,4));
console.log(fruits.slice(2,3));
console.log(fruits.slice(4));

//Splice():change original array(add,remove,replace)
//splice9stidx,delcount,newEle....)
let arr=[1,2,3,4,5,6,7];
// arr.splice(2,2,101,102);
console.log(arr);
//Add element
console.log(arr.splice(2,0,101));
//Delete Element
console.log(arr.splice(3,1));
//Replace Element
console.log(arr.splice(3,1,101));

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id)

// div.style.backgroundColor = "green"
// div.style.backgroundColor = "purple"
 
// div.style.fontSize = "26px";
// div.innerText = "Hello!"; 


// let button = document.createElement("button");
// button.innerText="Click me!"
// console.log(button);

// let div = document.querySelector("div")
// //div.prepend(button);
// //div.append(button);
// //div.before(button);
// div.after(button);

// let heading = document.createElement("h1");
// heading.innerText = "<i>Hi i am new </i> ";

// document.querySelector("body").prepend(heading);

// let para = document.querySelector("p");
// para.remove();



