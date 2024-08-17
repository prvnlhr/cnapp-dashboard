import React from "react";
import styles from "./styles/dashboard.module.scss";
import { categories } from "../../JSONData/data";
import Category from "../Category/Category";
import AddWidgetBtn from "./AddWidgetBtn";
import MenuBtn from "./MenuBtn";
import RefreshBtn from "./RefreshBtn";
import TimeRangeSelectorBtn from "./TimeRangeSelectorBtn";
const Dashboard = () => {
  return (
    <div className={styles.dashboardWrapper}>
      <div className={styles.dashHeaderCell}>
        <p className={styles.headingText}>CNAPP Dashboard</p>
        <AddWidgetBtn />
        <RefreshBtn />
        <MenuBtn />
        <TimeRangeSelectorBtn />
      </div>
      <div className={styles.contentCell}>
        {categories.map((category) => (
          <Category category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
