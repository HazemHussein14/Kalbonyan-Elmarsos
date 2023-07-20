const task3Element = document.getElementById("task-3");

function showAlert() {
  alert("alert from function with no parameters");
}
function nameAlert(name) {
  alert(name);
}

function names(name1, name2, name3) {
  fullName = `${name1} ${name2} ${name3}`;
  alert(fullName)
}
nameAlert("hazem");
names("Hazem","Hussein", "Mostafa")

task3Element.addEventListener("click", showAlert);
