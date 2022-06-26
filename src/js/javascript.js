const form = document.querySelector("form");
const nameForm = document.querySelector("#name");
const newTaskLine = document.querySelector("tbody");
const deleteButton = document.querySelector("#deleteButton");
const deleteItem = document.querySelector(".delete");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = {
    id: e.target.id.value,
    name: e.target.firstName.value,
    lastName: e.target.lastName.value,
  };
  addTask(data);
});

deleteItem.addEventListener("click", function (e) {
  // var parent = e.toElement.parentElement;
  console.log("ada", e);
});

function addTask(newTask) {
  const newLine = document.createElement("tr");
  const newTaskItemId = document.createElement("td");
  const newTaskItemName = document.createElement("td");
  const newTaskItemLastName = document.createElement("td");
  const deleteButton = document.createElement("button");
  const updateButton = document.createElement("button");

  newTaskItemId.innerText = newTask.id;
  newTaskItemName.innerText = newTask.name;
  newTaskItemLastName.innerText = newTask.lastName;
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  updateButton.innerText = "Update";

  newTaskLine.appendChild(newLine);
  newLine.appendChild(newTaskItemId);
  newLine.appendChild(newTaskItemName);
  newLine.appendChild(newTaskItemLastName);
  newLine.appendChild(deleteButton);
  newLine.appendChild(updateButton);
}
