import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Header from "../UI/Header";
import TaskTitle from "./TaskTitle";
import classes from "./TaskData.module.css";

const TaskData = ({tasks,onDeleteTask,onUpdatedTasks}) => {

  const updatedTasksHandler = (updatedTasksData) => {
    onUpdatedTasks(updatedTasksData);
  }

  const navigate = useNavigate();

  let content = <p>No tasks found.Do you want to create?</p>;

  if(tasks.length > 0)
  {
    content = tasks.map((task) => (
        <div key={task.id}>
            <TaskTitle tasksData={task}
            handleTaskData={() => onDeleteTask(task.id)} 
            onUpdatedTasks={updatedTasksHandler}/>
        </div>
        ))    
  }

  return (
    <>
      <h1>Todo Task List</h1>
      <Button onClick={() => navigate('/add')}>Create Your Task</Button>
      <Card className={classes.tasks}>      
        <Header>My Tasks</Header>
        {content}
      </Card>
    </>    
  );
};

export default TaskData;
