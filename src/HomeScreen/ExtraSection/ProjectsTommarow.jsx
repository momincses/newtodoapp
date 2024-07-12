import React from "react";
import styles from "./ProjectsTommarow.module.css";
import { useState } from "react";

const ProjectsTommarow = () => {
  const [extraBlock, setExtraBlock] = useState(false);

  return (
    <div>
      <div className={styles.more}>
        <div className={styles.tomarrow}>
          <img src="./src/assets/tomorrow.png" alt="" />
        </div>
        <div className={styles.projects}>
          <img src="./src/assets/project-management.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsTommarow;
