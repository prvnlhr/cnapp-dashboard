import React from "react";
import styles from "./styles/category.module.scss";
import Widget from "../Widget/Widget";
import { useAppState } from "../../context/AppContext";

const Category = ({ category }) => {
  const { searchQuery } = useAppState();
  return (
    <div className={styles.cartegoryLayoutWrapper}>
      <div className={styles.headingCell}>
        <p>{category.name}</p>
      </div>
      <div className={styles.widgetsCell}>
        {category.widgets
          .filter((widget) => widget.status)
          .map((widget) => (
            <Widget category={category} widget={widget} key={widget.id} />
          ))}
        {!searchQuery && <Widget category={category} withBtn={true} />}
      </div>
    </div>
  );
};

export default Category;
