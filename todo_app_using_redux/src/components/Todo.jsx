import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setTodos,
  addTodoAction,
  deleteTodoAction,
  updateTodoAction,
} from "../redux/todoActions";
import axios from "axios";
const API_BASE_URL = "https://todo-mern-app-ktek.onrender.com/api/todos";

const Todo = () => {
  const [text, setText] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  useEffect(() => {
    fetchTodos();
  }, []);
  // ADD / UPDATE
  const handleSubmit = async () => {
    if (!text.trim()) return;

    if (isEdit) {
      const res = await axios.put(`${API_BASE_URL}/${editId}`, {
        text: text,
      });
      dispatch(updateTodoAction(res.data));

      setIsEdit(false);
      setEditId(null);
    } else {
      const res = await axios.post(API_BASE_URL, {
        text,
        isCompleted: false,
      });

      dispatch(addTodoAction(res.data)); // add
    }

    setText("");
  };

  // PREFILL INPUT
  const handleEdit = (todo) => {
    setText(todo.text); // fill input
    setIsEdit(true); // switch mode

    setEditId(todo._id); // store id
    console.log(todo._id);
  };

  const handleToggle = async (todo) => {
    const res = await axios.put(`${API_BASE_URL}/${todo._id}`, {
      ...todo,
      isCompleted: !todo.isCompleted,
    });

    dispatch(updateTodoAction(res.data));
  };
  // FETCH TODOS
  const fetchTodos = async () => {
    const res = await axios.get(API_BASE_URL);
    dispatch(setTodos(res.data));
  };

  // DELETE TODO
  const deleteTodo = async (id) => {
    await axios.delete(`${API_BASE_URL}/${id}`);

    dispatch(deleteTodoAction(id));
  };

  return (
    <div className="glassContainer">
      <h2 className="title"> Todo</h2>

      <div className="glassInputBox">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          placeholder="Enter todo..."
        />

        <button onClick={handleSubmit}>{isEdit ? "Update" : "Add"}</button>
      </div>

      <div className="todoList">
        {todos.map((todo) => (
          <div className="glassCard" key={todo._id}>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => handleToggle(todo)}
            />

            <span
              className={todo.isCompleted ? "todoText completed" : "todoText"}
            >
              {todo.text}
            </span>

            {!todo.isCompleted && (
              <button className="editBtn" onClick={() => handleEdit(todo)}>
                Edit
              </button>
            )}

            <button className="deleteBtn" onClick={() => deleteTodo(todo._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
