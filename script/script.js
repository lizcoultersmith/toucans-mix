//MAIN INPUT//////////////////////////////////////////////////////////////////////////////////////

function getMainFocus() {
    var mainFocus = document.getElementById('mainFocusQuestion').value;
    document.getElementById('mainFocusParagraph').innerHTML = mainFocus
}

//TO DO LIST//////////////////////////////////////////////////////////////////////////////////////
var todoList = {
    todos: [],
    addTodo: function(todoText) {
      this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodo: function(index, todoText) {
        this.todos[index].todoText = todoText;
    },
    deleteTodo: function(index) {
        this.todos.splice(index, 1);
    },
    //Toggle one specific todo
    toggleCompleted: function(index) {
      var todo = this.todos[index];
      todo.completed = !todo.completed;
    },
    //Toggle all todos to incomplete or to complete
    toggleAll: function() {
        var all = true;
        //If a todo is not complete, change to completed
        this.todos.forEach(function(todo) {
          if (todo.completed === false) {
            todo.completed = true;
            all = false;
          }
        });
          if (all === true) {
             this.todos.forEach(function(todo) {
               todo.completed = false;
             })
         };
    }
};

var handlers = {
  addTodo: function() {
    var textInput = document.getElementById('textInput');
    todoList.addTodo(textInput.value);
    textInput.value = '';
    display.displayTodos();
  },

  deleteTodo: function(index) {
    todoList.deleteTodo(index);
    display.displayTodos();
  },

  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    display.displayTodos();
  },

  toggleAll: function() {
    todoList.toggleAll();
    display.displayTodos();
  }
}

var display = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    todoList.todos.forEach(function(todo, index) {
      var todoLi = document.createElement('li');
      var checkbox = document.createElement('INPUT');
         checkbox.type = "checkbox";
         checkbox.id = "checkbox";
      var todoTextWithCompletion = '';
      // if (checkbox.checked = true) {
      //   todoTextWithCompletion = "This works!!!";
      // }
      if (todo.completed === true) {
        todoTextWithCompletion = '(X)' + todo.todoText;
       }
       else {
         todoTextWithCompletion = '( )' + todo.todoText;
       }
       todoLi.id = index;
       todoLi.appendChild(checkbox);
       var textNode = document.createTextNode(todoTextWithCompletion);
       todoLi.appendChild(textNode);
       //todoLi.textContent = todoTextWithCompletion;
       todoLi.appendChild(this.createDeleteButton());
       todosUl.appendChild(todoLi);
    }, this)
  },

  createDeleteButton: function(){
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },

  setEventListeners: function() {
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function() {
      var elementClicked = event.target;
      if (elementClicked.className === 'deleteButton') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    })
  }
};

display.setEventListeners();
