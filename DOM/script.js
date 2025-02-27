//document.getElementById
// let heading = document.getElementById("heading");
// console.log(heading);
// console.dir(heading);

//document.getEleName
// let heading = document.getElementsByClassName("myclass");
// console.dir(heading);
// console.log(heading);

//document.getElementsByTagName
//let parahs = document.getElementsByTagName("p");
//console.dir(parahs); 

// let firstEl = document.querySelector("p");
// console.dir(firstEl);

// let allEl = document.querySelectorAll("p");
// console.dir(allEl);

// let h2 = document.querySelector("h2")
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + "From krishna";

let divs = document.querySelectorAll(".box");
let idx =1;
for (div of divs){
    div.innerText =`new unique value ${idx}`;
    idx++;
}
// divs[0].innerText ="new unique value 1";
// divs[1].innerText ="new unique value 2";
// divs[2].innerText ="new unique value 3";