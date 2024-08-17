import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import styles from "./styles/menuBtn.module.scss";
const RefreshBtn = () => {
  return (
    <div className={styles.btnWrapper}>
      <Icon icon="lets-icons:refresh-2" style={{ color: "#495464" }} />
    </div>
  );
};

export default RefreshBtn;
