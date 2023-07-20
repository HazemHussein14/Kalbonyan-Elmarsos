const form = document.getElementById("user-input");
const userName = document.getElementById("username");
const password = document.getElementById("password");

function signUpHandler(e) {
  e.preventDefault();
  const userName = document.getElementById("username");
  const enteredUserName = userName.value;

  const password = document.getElementById("password");
  const enteredPassword = password.value;

  if(enteredUserName.trim() === '') {
    alert('Invalid input - username must not be empty!')
    return;
  }
  
  if(enteredPassword.trim() <= 5) {
    alert('Invalid input - passowrd must six characters or longer!')
    return;
  }

  const user = {
    userName: enteredUserName,
    password: enteredPassword,
  }

  console.log(user)
  console.log(`Hi, I am ${user.userName}`)
}

form.addEventListener("submit", signUpHandler);
