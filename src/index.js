document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputField = document.querySelector("#new-task-description");
    const taskDescription = inputField.value;

    const taskElement = document.createElement("li");
    taskElement.textContent = taskDescription;

    taskList.appendChild(taskElement);

    inputField.value = "";
  });
 
const priorityDropdown = document.querySelector("#priority-level");

priorityDropdown.addEventListener("change", function () {
  const selectedPriority = priorityDropdown.value;
  taskElement.classList.remove("high-priority", "medium-priority", "low-priority");
  taskElement.classList.add(`${selectedPriority}-priority`);
});

});
