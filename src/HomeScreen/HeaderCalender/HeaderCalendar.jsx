import React, { useState } from "react";
import styles from "./HeaderCalendar.module.css";
import {
  addDays,
  eachDayOfInterval,
  endOfWeek,
  format,
  startOfWeek,
} from "date-fns";

const HeaderCalendar = () => {
  const todayDate = format(new Date(), "eeeeeee dd-MMM");
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
  const [start, setStart] = useState(startOfWeek(new Date()));
  const [end, setEnd] = useState(endOfWeek(new Date()));

  const [datesOfWeek, setDatesOfWeek] = useState(
    eachDayOfInterval({ start, end })
  );

  const loadPreviousWeek = () => {
    const newStart = addDays(start, -7);
    const newEnd = addDays(end, -7);

    setStart(newStart);
    setEnd(newEnd);
    setDatesOfWeek(eachDayOfInterval({ start, end }));
  };

  const loadNextWeek = () => {
    const newStart = addDays(start, 7);
    const newEnd = addDays(end, 7);

    setStart(newStart);
    setEnd(newEnd);
    setDatesOfWeek(eachDayOfInterval({ start, end }));
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.todayDate}>{todayDate}</div>
      <div className={styles.buttons}>
        <button onClick={loadPreviousWeek} className={` ${styles.leftButton} ${styles.button}`}>
          <img src="./src/assets/left.png" alt="" />
        </button>
        <button 
        onClick={loadNextWeek} 
        className={`${styles.rightButton} ${styles.button} }`}>
          <img src="src/assets/right.png" alt="" />
        </button>
      </div>
      <div className={styles.calendar}>
        <div className={styles.dayNames}>
          {daysOfWeek.map((item, index) => (
            <div className={styles.dayName} key={index}>
              {item}
            </div>
          ))}
        </div>
        <div className={styles.datesOfWeek}>
          {datesOfWeek.map((item, index) => (
            <div
              className={`${styles.dateOfWeek} ${
                format(new Date(), "dd-MM-yyyy") === format(item, "dd-MM-yyyy")
                  ? styles.active
                  : ""
              }`}
              key={index}
            >
              {format(item, "d")}
            </div>
          ))}
        </div>
      </div>
      <button className={`${styles.expandCalendar} ${styles.button}`}>
        <img src="src/assets/down.png" alt="" />
      </button>
    </div>
  );
};

export default HeaderCalendar;
