function addedTask() {

    let message = "Task added succesfully!";

    const input_task = document.getElementById("input_task");
    let task = input_task.value.trim();
    //a função trim() cuida para que se caso digitar somente espaços ele vai considerar como sendo vazio, ou seja, ""

    const mess = document.getElementById("message");
    //variável criada para que não precise digitar "document.getElementById("message")" sempre que precisar imprimir algo

    if(task == ""){
        message = "enter a task for to add!";
        mess.textContent = message;
    } else{
        mess.textContent = message;

        let task_list = document.getElementById("task_list");
        const new_task = document.createElement("li");

        new_task.textContent = task;
        task_list.appendChild(new_task);
    }

    input_task.value = "";

    
}