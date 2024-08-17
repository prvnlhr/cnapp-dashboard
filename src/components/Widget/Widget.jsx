import React from "react";
import styles from "./styles/widget.module.scss";
import AddWidgetBtn from "./AddWidgetBtn";
const Widget = ({ widget, withBtn }) => {
  return (
    <div className={styles.widgetWrapper}>
      {!withBtn && (
        <div className={styles.widgetNameDiv}>
          <p>{widget.title}</p>
        </div>
      )}
      <div className={styles.widgetContenDiv}>
        {withBtn && <AddWidgetBtn />}
      </div>
    </div>
  );
};

export default Widget;
