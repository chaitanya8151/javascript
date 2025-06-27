const todoList =JSON.parse(localStorage.getItem('todoList')) || [{
    name : 'make dinner',
    dueDate : '2025-06-24'  
  },{
    name : 'wash dishes',
    dueDate : '2025-06-25'
  }];
renderTodoList();
function renderTodoList() {
  let todoListHtml = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    const {name, dueDate} = todoObject;
    // const dueDate = todoObject.dueDate;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick = "
        todoList.splice(${i},1);
        renderTodoList();
        saveToStorage();
      " class = "delete-todo-button">Delete</button>
    `;
    todoListHtml += html;
  }
  // console.log(todoListHtml);
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHtml;
}
function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dueDateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dueDateInputElement.value;

  // console.log(name);
  todoList.push({
    // name : name,
    // dueDate : dueDate
    name, 
    dueDate
  });
  // console.log(todoList);

  inputElement.value = '';
  dueDateInputElement.value = '';
  renderTodoList();
  saveToStorage();
}
function saveToStorage(){
  localStorage.setItem('todoList',JSON.stringify(todoList));
}