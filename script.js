document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const pendingList = document.getElementById("pendingList");
  const completedList = document.getElementById("completedList");

  addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      addTask(taskText);
      taskInput.value = "";
    }
  });

  function addTask(taskText) {
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.addEventListener("click", () => markComplete(taskItem));

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => taskItem.remove());

    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);
    pendingList.appendChild(taskItem);
  }

  function markComplete(taskItem) {
    taskItem.classList.add("completed");
    taskItem.querySelector("button").remove();

    // Add Edit button to completed task
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => editTask(taskItem));

    taskItem.appendChild(editButton);
    completedList.appendChild(taskItem);
  }

  function editTask(taskItem) {
    const currentText = taskItem.firstChild.textContent;
    taskInput.value = currentText;
    taskItem.remove();
    taskInput.focus();
  }
});
