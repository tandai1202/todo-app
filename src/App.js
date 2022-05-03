import "./App.scss";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="App">
      <header className="App-container">
        <h1 className="App-text">TODO APP with REDUX</h1>

        <Filter />

        <div className="divider"></div>

        <TodoList />

        <Form />
      </header>
    </div>
  );
}

export default App;
