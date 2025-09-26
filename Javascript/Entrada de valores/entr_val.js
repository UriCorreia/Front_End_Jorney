function addedTask(){
    // let message = "Task added successfully";

    let input_task = document.getElementById("input_task");
    let task = input_task.value;
    //Para salvar o valor de um input é necessário fazer isso, se não vai receber a própria função input como valor
    document.getElementById("message").textContent = task;

    //adicionando uma lista de atividades
    let task_list = document.getElementById("task_list");
    let new_task = document.createElement("li");

    new_task.textContent = task;

    task_list.appendChild(new_task);

    input_task.value = "";
}