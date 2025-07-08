import TaskList from "./components/task-list/TaskList";
import { GlobalProvider } from "./context/GlobalState";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <TaskList />
    </GlobalProvider>
  );
}

export default App;
