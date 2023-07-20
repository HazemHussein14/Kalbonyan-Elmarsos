class Validator {
  static REQUIRED = "REQUIRED";
  static MIN_LENGTH = "MIN_LENGTH";

  static validate(value, flag, validatorValue) {
    if (flag === this.REQUIRED) {
      return value.trim().length > 0;
    }
    if (flag === this.MIN_LENGTH) {
      return value.trim().length > validatorValue;
    }
  }
}

class User {
  constructor(userName,userPassowrd) {
    this.userName = userName;
    this.userPassowrd = userPassowrd;
  }
  greet() {
    console.log(`Hi, I am ${this.userName}`)
  }
}

class UserInput {
  constructor() {
    this.form = document.getElementById("user-input");
    this.userName = document.getElementById("username");
    this.password = document.getElementById("password");

    this.form.addEventListener("submit", this.signUpHandler.bind(this));
  }

  signUpHandler(e) {
    e.preventDefault();
    const enteredUserName = this.userName.value;
    const enteredPassowrd = this.password.value;

    if (
      !Validator.validate(enteredUserName, Validator.REQUIRED) ||
      !Validator.validate(enteredPassowrd, Validator.MIN_LENGTH, 5)
    ) {
      alert(
        "Invalid input - username or password is wrong (passowrd should be at least 5 characters)"
      );
      return;
    }

    const newUser = new User(enteredUserName,enteredPassowrd);
    console.log(newUser)
    newUser.greet()
  }
}

new UserInput()