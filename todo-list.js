const toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];

renderTodoList();

function renderTodoList(){
  let toDoListHTML = '';

  for (let i = 0; i < toDoList.length; i++) {
    const todoObject = toDoList[i];
    const {name,dueDate} = todoObject;
    const html = `
      <div class="name">
        ${name}
      </div>
      
      <div class="date">
        ${dueDate}
      </div>

      <div class="delete-element">
        <button class="delete-button" onclick="
          toDoList.splice(${i}, 1)
          localStorage.setItem('toDoList', JSON.stringify(toDoList));
          renderTodoList();
        ">
        Удалить
        </button>
      </div>
      `;
    toDoListHTML += html;
  }


  document.querySelector('.js-todo-list')
    .innerHTML = toDoListHTML;
}



function addToDo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  if (name === '' || dueDate === '') {
    alert('Введите данные в поле задачи и дату');
    return;
  }

  toDoList.push({
    name,
    dueDate
  });

  localStorage.setItem('toDoList', JSON.stringify(toDoList));
  
  renderTodoList();
}

