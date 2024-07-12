import React, { useState } from "react";
import styles from "./AddTask.module.css";
import { Link } from "react-router-dom";

const AddTask = () => {
  const [newTask, setNewTask] = useState("");
  const [newTaskDetail, setNewTaskDetail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [taskTag, setTaskTag] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const [showCreatedNotification, setShowCreatedNotification] = useState(false);
  const [showErrorNotification, setShowErrorNotification] = useState(false);



  const tagList = ["work", "health", "education", "gym", "home", "hobbies"];
  const priorityList = ["high", "medium", "low"];

  const handleSubmit = () => {
    if(!newTask || !date || !time || !taskTag || !taskPriority){
      setShowErrorNotification(true);
      return;
    }else {
      const generateTask = {
        task : newTask,
        detail: newTaskDetail,
        date: date,
        time: time,
        tag: taskTag,
        priority: taskPriority,
        done: false
    }
    console.log(generateTask);
    const oldList = JSON.parse(localStorage.getItem("toDoList")) || []
    const updatedList = [...oldList, generateTask]
    localStorage.setItem('toDoList', JSON.stringify(updatedList))
    }

    setShowCreatedNotification(true);
      setTimeout(() => setShowCreatedNotification(false), 3000);

    setNewTask("")
    setNewTaskDetail("")
    setDate("")
    setTime("")
    setTaskTag("")
    setTaskPriority("")
  }

  return (
    <div className={styles.addTaskContainer}>
      <Link to="/home">
        <button className={styles.backButton}>
          <img src="./src/assets/left.png" alt="" />
        </button>
      </Link>
      <div className={styles.taskAndDetailInput}>
        <div className={styles.heading}>
          Create <br />
          New Task
        </div>
        <input
          type="text"
          placeholder="Add Task"
          className={styles.taskInput}
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <textarea
          type="text"
          placeholder="Add Task Detail"
          className={styles.detailInput}
          value={newTaskDetail}
          onChange={(e) => setNewTaskDetail(e.target.value)}
        />
      </div>
      <div className={styles.additionalDetail}>
        <input
          type="date"
          className={styles.dateInput}
          placeholder="Enter Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          className={styles.timeInput}
          placeholder="Enter Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <div className={styles.tagBlock}>
          <div className={styles.tagTitle}>Add Tag</div>
          {tagList.map((tag, index) => (
            <div className={`${styles.tag} ${tag === taskTag ? styles.selectedTag: ''}`} key={index}
            
            onClick={() => setTaskTag(tag )}
            >
              {tag}
            </div>
          ))}
        </div>
        <div className={styles.priorityBlock}>
          <div className={styles.priorityTitle}>Add Priority</div>
          {priorityList.map((priority, index) => (
            <div className={`${styles.priority} ${priority === taskPriority ? styles.selectedPriority: ''}`} key={index} 
            
            onClick={() => setTaskPriority(priority)}
            >
              {priority}
            </div>
          ))}
        </div>
        <div 
        type="submit" className={styles.createButton}
        onClick={handleSubmit}>
          CREATE
        </div>
      </div>
      {showCreatedNotification && (
        <div className={styles.notification}>
          <span>Task Created</span>
          <button className={styles.closeButton} onClick={() => setShowCreatedNotification(false)}>Close</button>
        </div>
      )}
      {showErrorNotification && (
        <div className={styles.notification}>
          <span>All Details are necessary except Task Detail</span>
          <button className={styles.closeButton} onClick={() => setShowErrorNotification(false)}>Close</button>
        </div>
      )}
      </div>
  );
};

export default AddTask;
