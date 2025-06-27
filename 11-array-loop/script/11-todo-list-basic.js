const todo = [];
function handleKeydown(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
}
function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  todo.push(name);
  console.log(todo);
  inputElement.value = '';
}