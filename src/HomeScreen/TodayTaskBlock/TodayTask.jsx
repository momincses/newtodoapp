import React from "react";
import styles from "./TodayTask.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { addDays, eachDayOfInterval, format, startOfMonth } from "date-fns";

const TodayTask = () => {

  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("toDoList")) || []
  );
  console.log(taskList);

  //deleting task
  const handleDelete = (index) => {
    const updatedTasks = taskList.filter((_, i) => i != index);
    localStorage.setItem("toDoList", JSON.stringify(updatedTasks));
    setTaskList(updatedTasks);
  };

  // toggling done 
  const handleDone = (index) => {
    const updatedTasks = taskList.map((task, i) => {
      if (index == i) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    localStorage.setItem("toDoList", JSON.stringify(updatedTasks));
    setTaskList(updatedTasks);
  };

  //definng todays Date
  const todayDate = new Date()

  //getting dates of current month
  // const next30Days = eachDayOfInterval({todayDate}, addDays(todayDate, 30))
  // console.log()

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>Today</div>
      </div>
      {taskList.length != 0 ? (
        <div className={styles.taskList}>
          {taskList.map((task, index) => 
          task.date == format(todayDate, "yyyy-MM-dd") &&(

              <div className={styles.taskItem} key={index}>
                {/* <div
                className={styles.priorityFlag}
                style={{ backgroundColor: task.priority }}
              >
              </div> */}
                <div className={styles.taskContent}>
                  <div className={styles.taskTitle}>{task.task}</div>
                  <div className={styles.taskDateTime}>
                    <div className={styles.taskDate}>
                      <img src="./src/assets/calendar.png" alt="" /> :{" "}
                      {task.date}
                    </div>
                    <div className={styles.taskTime}>
                      <img src="./src/assets/hourglass.png" alt="" /> :{" "}
                      {task.time}
                    </div>
                  </div>
                  <span className={styles.taskTag}>
                    <img src={`./src/assets/tags/${task.tag}.png`} alt="" />
                  </span>
                </div>
                <div className={styles.editButton}>
                  <div
                    onClick={() => handleDone(index)}
                    className={styles.doneBox}
                  >
                    <div
                      className="checkMark"
                      style={{ display: `${task.done ? "flex" : "none"}` }}
                    >
                      ✔
                    </div>
                  </div>
                  <div
                    onClick={() => handleDelete(index)}
                    className={styles.delete}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className={styles.noTask}>
          <img src="./src/assets/sleeping.gif" alt="" />
          No Task
          <div className={styles.add}>
            <Link to="/add">
              <img src="src/assets/add.png" alt="" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodayTask;
