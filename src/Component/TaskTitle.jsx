import React,{useState} from 'react';
import ErrorModal from './ShowModal';
import classes from './TaskTitle.module.css';
import TaskList from "./TaskList";

const TaskTitle = ({tasksData,handleTaskData,onUpdatedTasks}) => { 

  const [lists,setLists] = useState(tasksData.lists || []);
  const [showModal,setShowModal] = useState(false);

  let dateString = tasksData.date; 
  let data = new Date(dateString);
  let day = data.toLocaleDateString('en-US',{weekday: 'long'});
  let date = data.getDate();
  let month = data.toLocaleDateString('en-US',{month: 'long'});
  let year = data.getFullYear();

  const listItemHandler = (newList) => 
  {
    setLists((prevLists) => [...prevLists, newList]);

    const updatedTasksData = { ...tasksData };
    updatedTasksData.lists = [...lists, newList];
    onUpdatedTasks(updatedTasksData);
  };
  
  const handleRemove = (id) => {
    const remainList = lists.filter((list) => list.id !== id);
    setLists(remainList);
  }

  const handleEdit = (updateList) => {
    setLists((prevLists) => prevLists.map((list) => (list.id === updateList.id ? updateList : list)));
  }
    
  return (
    <>    
      <div className={classes["task-title"]}>
        <div className={classes["tasks-time"]}>
          <h2>{tasksData.name}</h2>
          <p>{`${day}, ${date} ${month} ${year}`}</p>
        </div>
        <span className={lists.length > 0 ? classes.span : ''}>{lists.length !== 0 ? `${lists.length} ${lists.length === 1 ? 'task' : 'tasks'}` : ''}</span>
        <i className="fa-solid fa-circle-xmark" onClick={() => handleTaskData(tasksData.id)}></i>
      </div>
      <TaskList lists={lists} handleRemove={handleRemove} handleEdit={handleEdit} />      
      <button className={classes.taskListButton} onClick={() => setShowModal(true)}>
        <i className="fa-solid fa-plus"></i>Add new List
      </button>  
      {
        showModal && 
        <ErrorModal listData={listItemHandler} onHideModal={() => setShowModal(false)}/>
      }
    </>
  )
}

export default TaskTitle

