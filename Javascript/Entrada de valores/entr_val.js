function addedTask(){
    // let message = "Task added successfully";

    //guarda o valor do input numa variável
    let input_task = document.getElementById("input_task");
    //guarda o valor da variável em outra para que possa ser utilizada
    let task = input_task.value;
    //Para salvar o valor de um input é necessário fazer isso, se não vai receber a própria função input como valor
    //imprimi a atividade guardada na variável
    document.getElementById("message").textContent = task;

    //adicionando uma lista de atividades
    //cria uma variável para guardar todas as tarefas
    let task_list = document.getElementById("task_list");
    //cria uma variável para guardar as tarefas e criar um elemento "li" 
    let new_task = document.createElement("li");

    //passa a atividade digitada no input e guardada a variável "task" para a variável "new task" que cria um elemento "li"
    new_task.textContent = task;
    //para se criar um elemento "li" é preciso que se tenha como referencia um elemento pai, por isso utilizamos a propriedade appenChild e foi utilizada na variável task_list
    task_list.appendChild(new_task);

    input_task.value = "";
}

//Código foi comentado apenas como forma de exercicio para memorização do conteúdo
