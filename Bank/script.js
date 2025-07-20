/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
// Start

/////////////////////////////////
// Data
covnst account1 = {
  owner: "Nitin Shrivastav",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interest: 6,
  pin: 1111,
};

const account2 = {
  owner: "Ravi Baliyan",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interest: 5.5,
  pin: 2222,
};

const account3 = {
  owner: "Rahul Sharma",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interest: 4,
  pin: 3333,
};

const account4 = {
  owner: "Kaushal Singh",
  movements: [430, 1000, 700, 50, 90],
  interest: 7,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance-value");
const labelSumIn = document.querySelector(".summary-value-in");
const labelSumOut = document.querySelector(".summary-value-out");
const labelSumInterest = document.querySelector(".summary-value-interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login-btn");
const btnTransfer = document.querySelector(".form-btn-transfer");
const btnLoan = document.querySelector(".form-btn-loan");
const btnClose = document.querySelector(".form-btn-close");
const btnSort = document.querySelector(".btn-sort");

const inputLoginUsername = document.querySelector(".login-input-user");
const inputLoginPin = document.querySelector(".login-input-pin");
const inputTransferTo = document.querySelector(".form-input-to");
const inputTransferAmount = document.querySelector(".form-input-amount");
const inputLoanAmount = document.querySelector(".form-input-loan-amount");
const inputCloseUsername = document.querySelector(".form-input-user");
const inputClosePin = document.querySelector(".form-input-pin");

/////////////////////////////////

// const arr = ["a","b","c","d","e","f","g"]
// const nums = [1,2,3,4,5]

// const arr1 = nums.map(function(ele){
//   return ele*2
// })
// console.log(arr1);

// const arr2 = nums.filter(function(ele){
//   return ele>2  
// })
// console.log(arr2);

// const Total = nums.reduce(function(acc,ele){
//   return acc+ele
// },0)
// console.log(Total);

// arr.forEach((ele,i)=>{
//   console.log(ele);
//   console.log(i);
// sum =0
// for(i=0;i<arr.size();i++){
//   sum = sum+arr[i]
// }  

// });
// console.log(arr.slice(2));
// console.log(arr.slice(2,4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1,-2));
// console.log(arr.slice());
// console.log([...arr]);

// containerMovements.innerHTML=""

// account1.movements.forEach(function(mov,i){
//   const type = mov > 0 ? "deposit" : "withdrawal"
//   const row = `<div class="movements-row">
//           <div class="movements-type movements-type-${type}"> ${i+1} ${type}</div>
          
//           <div class="movements-date">${new Date()}}</div>
//           <div class="movements-value">${mov}</div>
//         </div>`
//   containerMovements.insertAdjacentHTML("afterbegin",row)
// })

// function displayStats(acc){
// let income = acc.movements
// .filter((ele)=>{return ele>0})
// .reduce((acc,ele)=>{return acc+ele},0)
// labelSumIn.textContent = income
// let outgo = acc.movements
// .filter((ele)=>{return ele<0})
// .reduce((acc,ele)=>{return acc+ele},0)
// labelSumOut.textContent = outgo
// }
// displayStats(account1)

btnLogin.addEventListener("click",()=>{
  console.log("Hello");
  
})