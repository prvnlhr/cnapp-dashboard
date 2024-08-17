import React from "react";
import styles from "./styles/category.module.scss";
import Widget from "../Widget/Widget";

const Category = ({ category }) => {
  return (
    <div className={styles.cartegoryLayoutWrapper}>
      <div className={styles.headingCell}>
        <p>{category.name}</p>
      </div>
      <div className={styles.widgetsCell}>
        {category.widgets.map((widget) => (
          <Widget widget={widget} key={widget.id} />
        ))}
        <Widget withBtn={true} />
      </div>
    </div>
  );
};

export default Category;
