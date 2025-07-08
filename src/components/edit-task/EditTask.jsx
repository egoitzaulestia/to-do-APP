import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

const EditTask = () => {
  const { _id } = useParams();
  const { task, getTask } = useContext(GlobalContext);

  useEffect(() => {
    getTask(_id);
  }, []);

  console.log("id", _id);
  console.log("task", task.task);

  return <div>EditTask</div>;
};

export default EditTask;
