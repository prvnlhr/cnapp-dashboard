import React from "react";
import styles from "./styles/addBtn.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";

const AddWidgetBtn = () => {
  return (
    <button type="button" className={styles.btnWrapper}>
      <Icon
        icon="ic:round-plus"
        className={styles.icon}
        style={{ color: `#717886` }}
      />
      <p>Add Widget</p>
    </button>
  );
};

export default AddWidgetBtn;
