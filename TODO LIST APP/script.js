document.addEventListener("DOMContentLoaded",function(){
    const todoForm = document.querySelector(".todo-form");
    let todoInput = document.querySelector(".todo-input");
    let todoSubmit = document.querySelector(".todo-submit");
    let todoList = document.querySelector(".todo-list");
    let editMode = false;
    let editItem = "";
    todoForm.addEventListener("submit",function(event){
        event.preventDefault();
        
        const todoText = todoInput.value.trim();
        if(todoText !== ""){
            if(editMode){
                editItem.firstChild.textContent = todoText;
                todoSubmit.innerText = "Add Todo";
                editMode = false;
                editItem = null;
            }else{
                 //addTodo
            addTodoItem(todoText);
            }
            todoInput.value = "";
        }else{
            window.alert("Please enter todo descriptiion")
        }
    })
    function addTodoItem(todoText){
        const todoItem = document.createElement('li');
        const editTodo = document.createElement('button');
        const deleteTodo = document.createElement('button');
        todoItem.innerHTML = `<span>${todoText}</span>`;
        editTodo .innerText=`🖊`;
        deleteTodo.innerText = `❌`;
        todoItem.appendChild(editTodo);
        todoItem.appendChild(deleteTodo);
        todoList.appendChild(todoItem);
    }

    todoList.addEventListener("click",function(event){
        const target = event.target;

        if(target.tagName === "BUTTON"){
            const todoItem = target.parentNode;
            if(target.innerText === "❌"){
                todoItem.remove();
            } else if(target.innerText === "🖊"){
                editMode = true;
                editItem = todoItem;
                todoSubmit.innerText = "Edit Todo";
                todoInput.value = todoItem.firstChild.textContent;
                todoInput.focus();
            }
        }
    })
})
