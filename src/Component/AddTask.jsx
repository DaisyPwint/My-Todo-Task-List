import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./formControl.css";
import Header from "../UI/Header";

const AddTask = (props) => {

  const navigate = useNavigate();

  const [taskName,setTaskName] = useState('');
  const [taskDate,setTaskDate] = useState('');
  const [nameText,setNameText] = useState('');
  const [dateText,setDateText] = useState('');
  
  const inputTaskHandler = (e) => {
    e.preventDefault();
    if(taskName.trim().length === 0){
      setNameText('Please enter the task name');
      return;
    }
    if(taskDate.trim().length === 0){
      setDateText('Please choose Date & Time');
      return;
    }
    props.onAddTask(taskName,taskDate);
    if(taskName.trim().length > 0 && taskDate.trim().length > 0){
      setTaskName('');
      setTaskDate('');
    }
    navigate('/');
  }

  const nameChangeHandler = (e) => {
    if(e.target.value.trim().length > 0){
      setNameText('');
    }
    setTaskName(e.target.value);
  }

  const dateChangeHandler = (e) => {
    if(e.target.value.trim().length > 0){
      setDateText('');
    }
    setTaskDate(e.target.value);
  }

  return (
    <Card className="form-control">
      <Header>Add new task</Header>
      <form onSubmit={inputTaskHandler}>
        <label htmlFor="taskName">Task Name</label>
        <input type="text" id="taskName" placeholder="Enter Your task ..." value={taskName} onChange={nameChangeHandler} style={{borderColor :  nameText ? 'red' : ''}}/>
        {
          nameText && (
            <small>{nameText}</small>
          )
        }
        <label htmlFor="taskTime">Date</label>
        <input type="date" id="taskTime" value={taskDate} onChange={dateChangeHandler} style={{borderColor :  dateText ? 'red' : ''}}/>
        {
          dateText && (
            <small>{dateText}</small>
          )
        }
        <Button type="submit">
          <i className="fa-solid fa-plus"></i>Add New Task
        </Button>
      </form>
    </Card>
  );
};

export default AddTask;
