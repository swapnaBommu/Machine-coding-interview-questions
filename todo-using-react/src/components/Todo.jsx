import React,{useState} from 'react'

const Todo = () => {
    const [todoInput, setTodoInput] = useState("");
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const handleAddTodo = () => {
        // Logic to add a new todo item
        const newTodo = {
            id: Date.now(),
            text: todoInput
        };
        setTodos([...todos, newTodo]);
        localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
        setTodoInput("");
    }
    const handleEdit = (id) => {
        const todoToEdit = todos.find(todo => todo.id === id);
        const newTodoInput = todoToEdit.text;
        setTodoInput(newTodoInput);
        setTodos(todos.filter(todo => todo.id !== id));
    }
    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
        localStorage.setItem("todos", JSON.stringify(todos.filter(todo => todo.id !== id)));
        if(todos.length === 0){
            localStorage.removeItem("todos");
        }
    }
  return (
    <div>
        <h1>Todo App</h1>
        <input className='todo_input' type="text" placeholder='Enter a Todo' 
            value={todoInput} 
            onChange={(e) => setTodoInput(e.target.value)} 
            onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()} />
        <button className='add_todo' onClick={() => handleAddTodo()}>Add Todo</button>
        <div>
            {todos.map((todo) => (
                <div key={todo.id} className='todo_item'>
                    {todo.text}
                    <button className='edit_todo' onClick={()=>handleEdit(todo.id)}>Edit</button> 
                    <button className='delete_todo' onClick={()=>handleDelete(todo.id)}>delete</button>   
                </div>
            ))}
        </div>
    </div>
  )
}

export default Todo