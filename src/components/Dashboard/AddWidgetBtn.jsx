import React from "react";
import styles from "./styles/addBtn.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";

const AddWidgetBtn = () => {
  return (
    <button type="button" className={styles.btnWrapper}>
      <p>Add Widget</p>
      <Icon
        icon="ic:round-plus"
        className={styles.icon}
        style={{ color: `#495464` }}
      />
    </button>
  );
};

export default AddWidgetBtn;
