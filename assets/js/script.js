var createTaskHandler = function() {
    var taskItemEl = document.createElement("li");
    taskItemEl.textContent = "Poop";
    taskItemEl.className = "task-item";

    document.querySelector("#tasks-to-do").appendChild(taskItemEl);
}

document.querySelector(".btn").addEventListener("click", createTaskHandler);