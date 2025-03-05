let todoitems = [
  {
   name: 'ss',
   dueDate:'2025-06-16',
  },
  {
    name: 'ssa',
    dueDate:'2025-07-16',
  }
  ];

randomItems();

function randomItems(){
  let htmlTemplate = '';
 
  todoitems.forEach(function(todoValue, index){
  
    const {name, dueDate} = todoValue;
    const html = `<diV>${name}</div>
    <div>${dueDate}</div>
    <button class = "deleteButton js-delete-button"
    >Delete</button>
    `;
    htmlTemplate += html;
  })


 document.querySelector(".js-todo-data").innerHTML = htmlTemplate;

 document.querySelectorAll(".js-delete-button")
 .forEach((deleteButton, index) => {
  deleteButton.addEventListener('click', () => {
    todoitems.splice(index, 1);
    randomItems();
  })
 })
}

document.querySelector('.js-add-button').addEventListener('click', () => {
  addTodo();
})



function addTodo(){
  const input = document.querySelector('.js-input-clss');
  const inputElement = input.value;
  const datainput = document.querySelector('.js-date-cls');
  const dataInputElement = datainput.value
  todoitems.push({
    name: inputElement,
    dueDate: dataInputElement,
  });
  randomItems();
}