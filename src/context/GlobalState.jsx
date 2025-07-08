import React, { createContext, useReducer } from "react";
import axios from "axios";
import AppReducer from "./AppReducer";

const initialState = {
  tasks: [],
  task: {},
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getTasks = async () => {
    const res = await axios.get("http://localhost:3000/tasks");

    dispatch({
      type: "GET_TASKS",
      payload: res.data.tasks,
    });
  };

  const deleteTask = async (_id) => {
    try {
      await axios.delete(`http://localhost:3000/tasks/${_id}`);
      dispatch({
        type: "DELETE_TASK",
        payload: _id,
      });
    } catch (err) {
      console.error("deleteTask error:", err);
    }
  };

  const addTask = async (task) => {
    try {
      const res = await axios.post("http://localhost:3000/tasks/create", task);

      dispatch({
        type: "ADD_TASK",
        payload: res.data.task,
      });
    } catch (err) {
      console.error("addTask error:", err);
    }
  };

  const getTask = async (_id) => {
    try {
      const res = await axios.get(`http://localhost:3000/tasks/${_id}`);

      dispatch({
        type: "GET_TASK",
        payload: res.data,
      });
    } catch (err) {
      console.log("getTask Error:", err);
    }
  };
  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        getTasks,
        deleteTask,
        addTask,
        getTask,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
