import "./App.css";
import Header from "./component/layout/header";
import AddTodo from "./component/todos/addTodo";
import Todos from "./component/todos/todos";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="todoContainer">
          <AddTodo />
          <Todos />
        </div>
      </main>
    </>
  );
}

export default App;
