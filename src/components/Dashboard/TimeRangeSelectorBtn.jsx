import React from "react";
import styles from "./styles/timeRangeSelectorBtn.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
const TimeRangeSelectorBtn = () => {
  return (
    <div className={styles.bntWrapper}>
      <div className={styles.clockIconDiv}>
        <Icon icon="mdi:clock" style={{ color: "#141478" }} />
      </div>
      <div className={styles.timeRangeTextDiv}>
        <p>Last 2 days</p>
      </div>
      <div className={styles.dropDownChevIconDiv}>
        <Icon icon="tdesign:chevron-down" style={{ color: "#141478" }} />
      </div>
    </div>
  );
};

export default TimeRangeSelectorBtn;
