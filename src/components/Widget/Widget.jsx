import React from "react";
import styles from "./styles/widget.module.scss";
import AddWidgetBtn from "./AddWidgetBtn";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useAppState } from "../../context/AppContext";
const Widget = ({ category, widget, withBtn }) => {
  const { deleteWidget, searchResult } = useAppState();
  const handleDeleteWidget = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this widget?"
    );
    if (isConfirmed) {
      deleteWidget(category.id, widget.id);
    }
  };
  return (
    <div className={styles.widgetWrapper}>
      {!withBtn && !searchResult && (
        <>
          <div
            className={styles.deleteCrossIconDiv}
            onClick={handleDeleteWidget}
          >
            <Icon className={styles.deleteCrossIcon} icon="akar-icons:cross" />
          </div>
          <div className={styles.widgetNameDiv}>
            <p>{widget.name}</p>
          </div>
        </>
      )}
      <div className={styles.widgetContenDiv}>
        {withBtn && <AddWidgetBtn category={category} />}
        <p>{widget?.text}</p>
      </div>
    </div>
  );
};

export default Widget;
