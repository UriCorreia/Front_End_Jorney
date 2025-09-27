let tasks = [];


function addedTask(){

    let message = "Task added succesfully!";

    const input_task = document.getElementById("input_task");
    let task = input_task.value.trim();

    if(task == ""){
        message = "enter a task for to add!";
        document.getElementById("message").textContent = message;
    } else{
        document.getElementById("message").textContent = message;

        tasks.push(task);

        renderateTask();
    }

    input_task.value = "";

}

function renderateTask(){
    const task_list = document.getElementById("task_list");
    task_list.innerHTML = "";

    for( let i = 0; i < tasks.length; i++){
        let new_task = document.createElement("li");
        new_task.textContent = tasks[i];
        task_list.appendChild(new_task);
    }
}