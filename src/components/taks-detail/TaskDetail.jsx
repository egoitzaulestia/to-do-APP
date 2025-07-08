import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";

const TaskDetail = () => {
  const { tasks, getTasks, deleteTask } = useContext(GlobalContext);

  useEffect(() => {
    getTasks();
  }, []);

  return (
    tasks &&
    tasks.map((task) => (
      <div className="task" key={task._id}>
        <h2>{task.title}</h2>
        <button onClick={() => deleteTask(task._id)}>X</button>
      </div>
    ))
  );
};

export default TaskDetail;
