import React,{useState} from 'react';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import AddTask from "./Component/AddTask";
import TaskData from "./Component/TaskData";
import FallBack from "./Component/FallBack";
import { v4 as uuidv4 } from 'uuid';

// const myTasks = [
//   {
//   id: uuidv4(),
//   name : 'My Homework',
//   date : new Date(),
//   lists : [
//     {
//       id : uuidv4(),
//       name : 'to go to coffee shop',
//       time: '19:41'
//     }
//   ]
// }
// ]

function App() {
  const [tasksList,setTasksList] = useState([]);
  const addTaskHandler = (tName,tDate) => {
    const newTask = {name: tName, date: tDate, id: uuidv4()};
    setTasksList((prev) => [...prev,newTask]);
  }

  const deleteTaskHandler = (taskId) => {
    const remainTask = tasksList.filter((task) => task.id !== taskId);
    setTasksList(remainTask);
  }

  const updatedTasksHandler = (updatedTasksData) => {
    setTasksList((prevTasksList) => {
      const updatedTask = prevTasksList.map((task) => {
        if (task.id === updatedTasksData.id) {
          return updatedTasksData;
        }
        return task;
      });
      return updatedTask;
    });
  };
  
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<TaskData tasks={tasksList} onUpdatedTasks={updatedTasksHandler} onDeleteTask={deleteTaskHandler}/>}></Route>
          <Route path="/add" element={<AddTask onAddTask={addTaskHandler}/>}></Route>
          <Route path="*" element={<FallBack/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
