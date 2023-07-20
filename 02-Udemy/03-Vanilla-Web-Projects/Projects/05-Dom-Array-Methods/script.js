const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

let data = [];

getRandomUSer();
getRandomUSer();
getRandomUSer();

// Feath random user and add money
async function getRandomUSer() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();

  const user = data.results[0];
  // console.log(user);
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };
  addData(newUser);
}

function addData(obj) {
  data.push(obj);

  updateDOM();
}

function updateDOM(providedData = data) {
  // clear the main div
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";

  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${formaMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

// format number as money
function formaMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

// Double money
function doubleMoney() {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  });
  updateDOM();
}

// Sort by richest
function sortByrichest() {
  data.sort((a, b) => b.money - a.money);
  updateDOM();
  // console.log('hollo')
}

// filter only millionaires
function showMillionaires() {
  data = data.filter((item) => {
    return item.money > 999999;
  });
  updateDOM();
}

// calculte wealth
function calculateWealth() {
  wealth = data.reduce((acc,user) => {
    return acc += user.money
  },0)
  
  const wealthEl = document.createElement('div')
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formaMoney(wealth)}</strong></h3>`
  main.append(wealthEl)
}

// Event listeners
addUserBtn.addEventListener("click", getRandomUSer);

doubleBtn.addEventListener("click", doubleMoney);

sortBtn.addEventListener("click", sortByrichest);

showMillionairesBtn.addEventListener("click", showMillionaires);

calculateWealthBtn.addEventListener("click", calculateWealth);
