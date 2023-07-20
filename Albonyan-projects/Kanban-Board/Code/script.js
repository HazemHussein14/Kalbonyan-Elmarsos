const addBtnStart = document.getElementById("add-button-started");
const addBtnProgress = document.getElementById("add-button-progress");
const addBtnCompleted = document.getElementById("add-button-completed");

let listOne = JSON.parse(localStorage.getItem("listOne")) || [];
let listTwo = JSON.parse(localStorage.getItem("listTwo")) || [];
let listThree = JSON.parse(localStorage.getItem("listThree")) || [];

function renderTasks(list, parentId) {
  list.forEach((taskObj) => {
    const parentList = document.getElementById(parentId);
    const taskId = taskObj.id;
    const taskEl = CreateTask(taskId);
    const dropzoneEl = createDropZoneEl(taskId);
    taskEl.querySelector(".input-area").value = taskObj.content;
    parentList.lastElementChild.before(taskEl);
    taskEl.after(dropzoneEl);
  });
}

function render() {
  renderTasks(listOne, "not-started");
  renderTasks(listTwo, "in-progress");
  renderTasks(listThree, "completed");
}

render();

// Create task item
function CreateTask(id) {
  const task = document.createElement("li");
  task.classList.add("task");
  task.draggable = true;
  task.id = id || generateId();
  task.innerHTML = `
    <input type="text" class="input-area" placeholder="Type a name..." />
    <div class="btns">
      <button id="edit-button" class="small-btn edit" onclick="editTask(event)">
        <i class="fa-regular fa-pen-to-square"></i>
      </button>
      <button id="remove-button" onclick="removeTask('${task.id}')" class="small-btn remove">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  `;

  const taskInput = task.querySelector(".input-area");

  // save the user input to local storage by update input function
  taskInput.addEventListener("input", () => {
    updateInput(task.id, taskInput.value, task.parentElement.id);
  });

  // set dataTransfer object with id of dragged element
  task.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  });
  dragAndDrop();
  return task;
}

// Create dropzone element
function createDropZoneEl(taskId) {
  const dropZoneEl = document.createElement("div");
  dropZoneEl.classList.add("dropzone");
  dropZoneEl.id = `dropzone-${taskId}`;
  return dropZoneEl;
}

// Drag and Drop
function dragAndDrop() {
  const dropzones = document.querySelectorAll(".dropzone");
  dropzones.forEach((dropzone) => {
    dropzone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropzone.classList.add("active");
    });

    dropzones.forEach((dropzone) => {
      dropzone.addEventListener("dragleave", () => {
        dropzone.classList.remove("active");
      });
    });

    dropzone.addEventListener("drop", (e) => {
      e.preventDefault();
      dropzone.classList.remove("active");

      // Get the ID of the dragged element
      const draggedTaskId = e.dataTransfer.getData("text/plain");

      // Get the dragged task element
      const draggedTask = document.getElementById(draggedTaskId);

      // Insert the dragged task element after the drop zone element
      dropzone.after(draggedTask, draggedTask.nextElementSibling);

      const taskInput = draggedTask.querySelector(".input-area");

      const dropzoneArr = [...dropzones];
      const dropzoneIndex = dropzoneArr.indexOf(dropzone);

      const taskObj = {
        id: draggedTaskId,
        content: taskInput.value,
        status: draggedTask.parentElement.id,
        dropzone: dropzone.id,
      };

      // remove the dragged task from it's array
      listOne = listOne.filter((task) => task.id !== draggedTaskId);
      listTwo = listTwo.filter((task) => task.id !== draggedTaskId);
      listThree = listThree.filter((task) => task.id !== draggedTaskId);

      // adding the dragged task to the new array
      if (taskObj.status === "not-started") {
        listOne.splice(dropzoneIndex, 0, taskObj);
      }

      if (taskObj.status === "in-progress") {
        listTwo.splice(dropzoneIndex, 0, taskObj);
      }

      if (taskObj.status === "completed") {
        listThree.splice(dropzoneIndex, 0, taskObj);
      }

      saveData("listOne", listOne);
      saveData("listTwo", listTwo);
      saveData("listThree", listThree);
    });
  });
}

// Generate random ID
function generateId() {
  return Date.now();
}

// add task to DOM
function addTaskDOM(parentId) {
  const parentList = document.getElementById(parentId);
  const taskEl = CreateTask();
  const taskId = taskEl.id;
  const dropzoneEl = createDropZoneEl(taskId);
  parentList.lastElementChild.before(taskEl);
  taskEl.after(dropzoneEl);

  // add task object to it's list array and save it to local storage
  const taskObj = {
    id: taskId,
    content: "",
    status: parentId,
    dropzone: dropzoneEl.id,
  };

  if (taskObj.status === "not-started") {
    listOne.push(taskObj);
    saveData("listOne", listOne);
  }

  if (taskObj.status === "in-progress") {
    listTwo.push(taskObj);
    saveData("listTwo", listTwo);
  }

  if (taskObj.status === "completed") {
    listThree.push(taskObj);
    saveData("listThree", listThree);
  }
}

// Edit task
function editTask(e) {
  const taskInput = e.target.closest(".task").querySelector(".input-area");
  taskInput.select();
}

// Remove task by ID
function removeTask(id) {
  const taskId = id;
  const taskEl = document.getElementById(taskId);
  const dropzoneEl = document.getElementById(`dropzone-${taskId}`);
  taskEl.remove();
  dropzoneEl.remove();

  // Remove task and dropzone from local storage
  listOne = listOne.filter((task) => task.id !== id);
  listTwo = listTwo.filter((task) => task.id !== id);
  listThree = listThree.filter((task) => task.id !== id);

  // save changes to local storage
  saveData("listOne", listOne);
  saveData("listTwo", listTwo);
  saveData("listThree", listThree);
}

// Updata task input in local storage
function updateInput(id, content, parentId) {
  const taskEl_NotStarted = listOne.find((task) => task.id === id);
  const taskEl_InProgress = listTwo.find((task) => task.id === id);
  const taskEl_Completed = listThree.find((task) => task.id === id);

  if (parentId === "not-started") {
    taskEl_NotStarted.content = content;
    saveData("listOne", listOne);
  }

  if (parentId === "in-progress") {
    taskEl_InProgress.content = content;
    saveData("listTwo", listTwo);
  }

  if (parentId === "completed") {
    taskEl_Completed.content = content;
    saveData("listThree", listThree);
  }
}

// Save data to local storage
function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// Event Listeners
addBtnStart.addEventListener("click", addTaskDOM.bind(null, "not-started"));
addBtnProgress.addEventListener("click", addTaskDOM.bind(null, "in-progress"));
addBtnCompleted.addEventListener("click", addTaskDOM.bind(null, "completed"));
