import React, { useContext, useEffect, useState } from "react";
import {v4 as uuidv4} from "uuid"

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [inputValue, setinputValue] = useState({ id:uuidv4(), task: "", date: "", isDone: false });
  const [taskData, setTaskData] = useState([])

  const handleChange = (e) => {
    if (e.target.id === "task") {
     return setinputValue((prevState) => ({
        ...prevState,
        task: e.target.value,
      }));
    }
return setinputValue((prevState) => ({
    ...prevState,
    date: e.target.value,
  }));
  };

const handleClick=()=>{
    setTaskData(taskData.concat(inputValue))
    setinputValue({ id:uuidv4(), task: "", date: "" })
}
console.log(taskData)

const handleDelete =(id)=>{
const tempData = taskData.filter(task => task.id!==id);
setTaskData(tempData);
}
const handleDone =(id)=>{
const tempData = taskData.map(task => {
    if (task.id===id) {
        return {...task, isDone:!task.isDone};
    }
return task
});
    setTaskData(tempData);
}



const getLocalStorage = () => {
    localStorage.getItem("data") &&
      setTaskData(JSON.parse(localStorage.getItem("data")));
  };
  const setLocalStorage = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
  };
useEffect(() => {
  getLocalStorage()
}, [])

useEffect(() => {
  setLocalStorage(taskData)


}, [taskData])



  return (
    <AppContext.Provider
      value={{
        isAddTaskOpen,
        setIsAddTaskOpen,
        inputValue,
        setinputValue,
        handleChange,
        handleClick,
        taskData,
        handleDelete,
        handleDone,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
