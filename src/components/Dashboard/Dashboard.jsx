import React, { useEffect } from "react";
import styles from "./styles/dashboard.module.scss";
import Category from "../Category/Category";
import AddWidgetBtn from "./AddWidgetBtn";
import MenuBtn from "./MenuBtn";
import RefreshBtn from "./RefreshBtn";
import TimeRangeSelectorBtn from "./TimeRangeSelectorBtn";
import SideWidgetMenu from "../SideMenu/SideWidgetMenu";
import { useAppState } from "../../context/AppContext";

const Dashboard = () => {
  const { categoriesData, searchResult, searchQuery } = useAppState();

  return (
    <div className={styles.dashboardWrapper}>
      <SideWidgetMenu />
      <div className={styles.dashHeaderCell}>
        <p className={styles.headingText}>CNAPP Dashboard</p>
        {/* <AddWidgetBtn /> */}
        {/* <RefreshBtn /> */}
        <MenuBtn />
        {/* <TimeRangeSelectorBtn /> */}
      </div>
      <div className={styles.contentCell}>
        {(searchQuery && searchResult ? searchResult : categoriesData).map(
          (category) => (
            <Category category={category} key={category.id} />
          )
        )}
      </div>
    </div>
  );
};

export default Dashboard;
