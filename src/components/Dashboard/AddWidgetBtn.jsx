import React from "react";
import styles from "./styles/addBtn.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";

const AddWidgetBtn = () => {
  return (
    <button type="button" className={styles.btnWrapper}>
      <div className={styles.textDiv}>
        <p>Add Widget</p>
      </div>
      <div className={styles.iconDiv}>
        <Icon
          icon="ic:round-plus"
          className={styles.icon}
          style={{ color: `#495464` }}
        />
      </div>
    </button>
  );
};

export default AddWidgetBtn;
