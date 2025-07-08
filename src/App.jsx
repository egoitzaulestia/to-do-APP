import { BrowserRouter, Routes, Route } from "react-router-dom";

import TaskList from "./components/task-list/TaskList";
import EditTask from "./components/edit-task/EditTask";

import { GlobalProvider } from "./context/GlobalState";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="task/:_id" element={<EditTask />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
