import React, { useState} from 'react';
import EditModal from './EditModal';
import classes from './TaskList.module.css';

const TaskList = (props) => {
  const [editModal,setEditModal] = useState(false);  
  const [selectedList,setSelectedList] = useState(null);

  const handleEdit = (list) => {
    setSelectedList(list);
    setEditModal(true);
  }
  
  return (
      <>
        <ul className={classes["task-list"]}>
        {
          props.lists.map((list) => 
            <li key={list.id}>
              <button></button>
              <h3>{list.name}</h3>
              <p>{list.time}</p>
              <i className="fa-solid fa-pen-to-square" onClick={() => handleEdit(list)}></i>
              <i className="fa-solid fa-trash" onClick={() => props.handleRemove(list.id)}></i>
            </li>
          )
        }
      </ul>
      {      
        editModal && props.lists.map((list) =>
        <EditModal key={list.id} lists={selectedList} 
        updateData={props.handleEdit}
        onHideModal={() => setEditModal(false)}/>)
      }
      </>
  )
}

export default TaskList


