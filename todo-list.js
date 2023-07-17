const todoList = [{
    name:'make dinner',
    dueDate:'2023-07-17'
},{
    name: 'wash dishes',
    dueDate:'2023-07-17'
}];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';

    for (let i = 0; i<todoList.length; i++){
        const todoObject = todoList[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;

        const html = `
        <div> ${name}</div>
        <div> ${dueDate}</div>
        <button class="delete-todo-button" onclick="removeTodo(${i})"> Delete </button>    
        `;

        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({ name, dueDate });

    inputElement.value = '';
    dateInputElement.value = '';

    renderTodoList();
}

function removeTodo(index){
    todoList.splice(index, 1);
    renderTodoList();
}