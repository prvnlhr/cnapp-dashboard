import React from "react";
import styles from "./styles/widget.module.scss";
import AddWidgetBtn from "./AddWidgetBtn";

const Widget = ({ category, widget, withBtn }) => {
  console.log(widget);
  return (
    <div className={styles.widgetWrapper}>
      {!withBtn && (
        <div className={styles.widgetNameDiv}>
          <p>{widget.name}</p>
        </div>
      )}
      <div className={styles.widgetContenDiv}>
        {withBtn && <AddWidgetBtn category={category} />}
        <p>{widget?.text}</p>
      </div>
    </div>
  );
};

export default Widget;
