import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  removeTodo,
  updateStatus,
  updateTodo,
} from "../../app/features/todo/todoSlice";
function Todos() {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState();
  const [updatedText, setUpdatedText] = useState();
  const handleInputChange = (event) => {
    setUpdatedText(event.target.value);
  };
  const handleEdit = (id, text) => {
    setUpdatedText(text);
    setIsEditing(true);
    setSelectedTodo(id);
  };
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const todoTextClass = "w-full text-grey-darkest";
  const handleUpdateTodo = (id, text) => {
    setIsEditing(false);
    const payload = {
      id,
      text,
    };
    dispatch(updateTodo(payload));
  };
  return (
    <>
      <div>
        {todos.map((todo) => (
          <div className="flex mb-4 items-center" key={todo.id}>
            {isEditing && selectedTodo === todo.id ? (
              <>
                <input
                  className="w-full shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                  type="text"
                  value={updatedText}
                  onChange={handleInputChange}
                />
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  onClick={() => handleUpdateTodo(todo.id, updatedText)}
                >
                  Update
                </button>
              </>
            ) : (
              <>
                <p
                  className={`${todoTextClass} ${
                    todo.status === "Done" ? "line-through" : ""
                  }`}
                >
                  {todo.text}
                </p>
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  onClick={() => handleEdit(todo.id, todo.text)}
                >
                  Edit
                </button>
              </>
            )}

            <button
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              onClick={() => dispatch(updateStatus({ id: todo.id }))}
            >
              Done
            </button>
            <button
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={() => dispatch(removeTodo({ id: todo.id }))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Todos;
