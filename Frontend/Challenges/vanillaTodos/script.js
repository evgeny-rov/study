const todosURL = 'https://jsonplaceholder.typicode.com/posts?userId=1';

const todosList = document.querySelector('#todolist');
const getTodosBtn = document.querySelector('#todos-getter');

const todoInput = document.querySelector('#todoinput');
const addTodoBtn = document.querySelector('#add-todo');

const getTodos = async () => {
  const response = await fetch(todosURL);
  const data = await response.json();
  return data;
};

const createTodoElement = (text) => {
  const listItem = document.createElement('li');
  listItem.textContent = text;

  listItem.addEventListener('dblclick', () =>
    listItem.parentNode.removeChild(listItem)
  );
  return listItem;
};

const appendTodo = (element) => {
  todosList.appendChild(element);
};

const addTodo = (value) => {
  if (value.length < 1) return;

  const element = createTodoElement(value);
  appendTodo(element);
};

const loadTodos = async () => {
  const todos = await getTodos();
  todos.forEach(({ body }) => addTodo(body));
};

getTodosBtn.addEventListener('click', loadTodos);
addTodoBtn.addEventListener('click', () => {
  addTodo(todoInput.value);
  todoinput.value = '';
});

loadTodos();
