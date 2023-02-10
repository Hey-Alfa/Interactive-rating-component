
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let btn = document.getElementById('btn');
let starOne = document.getElementById('star5');
let starTwo = document.getElementById('star4');
let starThree = document.getElementById('star3');
let starFour = document.getElementById('star2');
let starFive = document.getElementById('star1');
let starRate = document.getElementById('star-rate');

starOne.addEventListener("click",()=>{
	starRate.innerHTML = "1"
	starOne.classList.add("color");
})
starTwo.addEventListener("click",()=>{
	starRate.innerHTML = "2"
	starTwo.classList.add("color");
})
starThree.addEventListener("click",()=>{
	starRate.innerHTML = "3"
	starThree.classList.add("color");
})
starFour.addEventListener("click",()=>{
	starRate.innerHTML = "4"
	starFour.classList.add("color");
})
starFive.addEventListener("click",()=>{
	starRate.innerHTML = "5"
	starFive.classList.add("color");
})

btn.addEventListener("click", function submit(){
	box1.classList.add("display")
	box2.classList.remove("display")
})

console.log(box1);
console.log(box2);