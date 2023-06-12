import React from 'react'
import ReactDOM from 'react-dom';
import TaskModal from "./TaskModal";
import classes from "./TaskModal.module.css";

const Overlay = (props) => {
  return <div className={classes["modal-overlay"]}>
      <TaskModal listData={props.listData} onHideModal={props.onHideModal}/>      
  </div>    
}

const ShowModal = (props) => {
  return (
    <>
        {
          ReactDOM.createPortal(<Overlay listData={props.listData} onHideModal={props.onHideModal}/>,document.getElementById('overlay-root'))
        }
    </>
  )
}

export default ShowModal
