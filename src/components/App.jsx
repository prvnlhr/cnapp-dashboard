import React, { useEffect } from "react";
import styles from "./app.module.scss";
import Dashboard from "./Dashboard/Dashboard";
import Header from "./Header/Header";
import { useAppState } from "../context/AppContext";
import { categories as data } from "../JSONData/data";
const App = () => {
  const { setCategoriesData, updateCurrCategory, searchResult } = useAppState();

  useEffect(() => {
    if (data) {
      setCategoriesData(data);
      updateCurrCategory(data[0]);
    }
  }, [data]);
  return (
    <div className={styles.app}>
      <div className={styles.appInnerwrapper}>
        <Header />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
