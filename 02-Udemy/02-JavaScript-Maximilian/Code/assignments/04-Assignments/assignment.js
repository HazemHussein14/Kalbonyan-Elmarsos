const greeting = "Hi";

const sayHello = (name) => {
  console.log("Hi " + name);
};

const sayHello2 = (name, greet = greeting) => console.log(`${greet} ${name}`);

const sayHello3 = () => console.log("hello there");

const checkInput = (callBack, ...hobbies) => {
  let hasEmptyString = false;
  for (hobby of hobbies) {
    
    if (hobby === "") {
      hasEmptyString = true;
      break;
    }
  }
  if (!hasEmptyString) {
    callBack();
  }
};

const callBack = function () {
  console.log("call back");
};

sayHello("Hazem");
sayHello2("Hazem");
sayHello3();
checkInput(
  () => {
    console.log("Hello from the callback");
  },
  "codding",
  "running",
  ''
);
