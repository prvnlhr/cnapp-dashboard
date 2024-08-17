import React from "react";
import styles from "./app.module.scss";
import Dashboard from "./Dashboard/Dashboard";
import Header from "./Header/Header";

const App = () => {
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
