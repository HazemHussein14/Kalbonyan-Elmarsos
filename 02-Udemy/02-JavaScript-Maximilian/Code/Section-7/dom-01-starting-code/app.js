const h1 = document.querySelector("h1");
h1.style.color = "white";
h1.style.backgroundColor = "black";
h1.style.textAlign = "center";

const listItemsElements = document.querySelectorAll("li");

const li = document.querySelector("li:last-child");
li.textContent = "CHANGED!!";

const section = document.querySelector("section");
const botton = document.querySelector("button");

// section.style.backgroundColor = "blue"
section.className = "red-bg";

botton.addEventListener("click", () => {
  // if (section.className === "red-bg visible") {
  //   section.className = "red-bg invisible";
  // } else {
  //   section.className = "red-bg visible";
  // }
  section.classList.toggle('invisible')
});
console.log(section.classList) 