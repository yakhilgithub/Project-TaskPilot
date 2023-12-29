const inputTask = document.querySelector("#inputtask");
const form = document.querySelector(".form");
const addButton = document.querySelector("#addbutton");
const toDoList = document.querySelector(".todolist");
const clear = document.querySelector(".clear");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (inputTask.value == "") {
      alert("Please add some text");
    } else {
      const newTask = createNewItem(inputTask.value);
      toDoList.appendChild(newTask);
      inputTask.value = "";
      inputTask.focus();
      clear.classList.remove("d-none");
    }
  
    clear.addEventListener("click", function () {
      toDoList.innerHTML = "";
    });
  });
  
  // Function to create a new item in the ToDo list
  function createNewItem(inputValue) {
    const task = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    span.textContent = inputValue;
    delBtn.textContent = "Delete";
    editBtn.textContent = "Edit";
    task.appendChild(span);
    task.appendChild(delBtn);
    task.appendChild(editBtn);
  
    // Event listener for the delete button
    delBtn.addEventListener("click", function () {
      task.parentNode.removeChild(task);
    });
  
    // Event listener for the edit button
    editBtn.addEventListener("click", function () {
      span.contentEditable = true;
      span.focus();
    });
  
    return task;
  }

  