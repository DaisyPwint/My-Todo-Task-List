import React, { useState } from 'react'
import Card from "../UI/Card"
import Header from "../UI/Header"
import Button from "../UI/Button"
import "./formControl.css";
import classes from './TaskModal.module.css';

const EditModal = (props) => {
  const {id,name: initialListName,time: initialListTime}  = props.lists;
  const [listName,setListName] = useState(initialListName);
  const [listTime,setListTime] = useState(initialListTime);
  const [nameText,setNameText] = useState('');
  const [timeText,setTimeText] = useState('');

  const updateListHandler = (e) => {
    e.preventDefault();
    if(listName.trim().length === 0){
      setNameText('Please enter the list name');
      return;
    }
    if(listTime.trim().length === 0){
      setTimeText('Please choose the time');
      return;
    }
    
    const updatedList ={
      id,
      name : listName,
      time : listTime 
    }
    props.updateData(updatedList);
    props.onHideModal();
  }

  return (
    <div className={classes["modal-overlay"]}>
      <Card className="form-control">
          <Header>Edit List</Header>
          <form onSubmit={updateListHandler}>
              <label htmlFor="listName">List Name</label>
              <input type="text" id="listName" placeholder="Enter list name..." value={listName} onChange={(e) => setListName(e.target.value)}/>
              {
                nameText && (<small>{nameText}</small>)
              }
              <label htmlFor="listTime">Time</label>
              <input type="time" placeholder="hh:mm tt" id="listTime" value={listTime} onChange={(e) => setListTime(e.target.value)}/>
              {
                timeText && <small>{timeText}</small>
              }
              <div className="button-container">
                <Button type="submit">Add</Button>
                <Button type="button" onClick={props.onHideModal}>Cancel</Button>
              </div>
          </form>
      </Card>
    </div>
  )
}

export default EditModal;
