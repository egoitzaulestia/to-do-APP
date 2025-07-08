import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";

const TaskDetail = () => {
  const { tasks, getTasks } = useContext(GlobalContext);

  useEffect(() => {
    getTasks();
  }, []);

  return (
    tasks &&
    tasks.map((task) => (
      <div className="task" key={task._id}>
        <h2>{task.title}</h2>
      </div>
    ))
  );
};

export default TaskDetail;
