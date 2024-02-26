import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../app/features/todo/todoSlice";
function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    const actionPayload = {
      text: input,
      status: "Todo",
    };
    dispatch(addTodo(actionPayload));
    setInput("");
  };
  return (
    <>
      <div className="mb-4">
        <h1 className="text-grey-darkest">Todo List</h1>
        <div className="flex mt-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
            placeholder="Add Todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={addTodoHandler}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}
export default AddTodo;
