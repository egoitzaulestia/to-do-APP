import { useParams } from "react-router-dom";

const EditTask = () => {
  const { _id } = useParams();
  console.log("id", _id);

  return <div>EditTask</div>;
};

export default EditTask;
