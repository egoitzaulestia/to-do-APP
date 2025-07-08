import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

const EditTask = () => {
  const { _id } = useParams();
  const { task, getTask } = useContext(GlobalContext);
  const [title, setTitle] = useState("");

  useEffect(() => {
    getTask(_id);
  }, []);

  useEffect(() => {
    setTitle(task.title);
  }, [task.title]);

  console.log("id", _id);
  console.log("task", task.task);

  return (
    <form>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title || ""}
        name="title"
      />
      <button type="submit">Edit task</button>
    </form>
  );
};

export default EditTask;
