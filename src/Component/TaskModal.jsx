import React, { useState } from 'react'
import Card from "../UI/Card"
import Header from "../UI/Header"
import Button from "../UI/Button"
import "./formControl.css";

const TaskModal = (props) => {
  const [listName,setListName] = useState('');
  const [listTime,setListTime] = useState('');
  const [nameText,setNameText] = useState('');
  const [timeText,setTimeText] = useState('');

  const inputListHandler = (e) => {
    e.preventDefault();
    if(listName.trim().length === 0){
      setNameText('Please enter the list name');
      return;
    }
    if(listTime.trim().length === 0){
      setTimeText('Please choose the time');
      return;
    }
    // let hour = listTime.split(":")[0];
    // let amPM = hour >= 12? "PM" : 'AM';
    // let time = listTime + ' ' + amPM;

    const list ={
      id : Math.random().toString(),
      name : listName,
      time : listTime 
    }
    props.listData(list);
    props.onHideModal();
  }

  const timeChangeHandler = (e) => {
    setListTime(e.target.value);
  }
   
  return (
      <Card className="form-control">
        <Header>Add new List</Header>
        <form onSubmit={inputListHandler}>
            <label htmlFor="listName">List Name</label>
            <input type="text" id="listName" placeholder="Enter list name..." value={listName} onChange={(e) => setListName(e.target.value)}/>
            {
              nameText && (<small>{nameText}</small>)
            }
            <label htmlFor="listTime">Time</label>
            <input type="time" placeholder="hh:mm tt" id="listTime" value={listTime} onChange={timeChangeHandler}/>
            {
              timeText && <small>{timeText}</small>
            }
            <div className="button-container">
              <Button type="submit">Add</Button>
              <Button type="button" onClick={props.onHideModal}>Cancel</Button>
            </div>
        </form>
      </Card>
  )
}

export default TaskModal