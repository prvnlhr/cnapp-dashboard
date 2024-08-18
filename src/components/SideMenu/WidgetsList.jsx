import React from "react";
import { useAppState } from "../../context/AppContext";
import styles from "./styles/widgetsList.module.scss";

const WidgetsList = () => {
  const {
    currentCategory,
    setWidgetFormData,
    categoriesData,
    setCategoriesData,
    updateCurrCategory,
    setShowWidgetForm,
  } = useAppState();

  const handleChangeCheckbox = (widgetId) => {
    const currCategoryId = currentCategory.id;
    const updatedWidgets = currentCategory.widgets.map((widget) =>
      widget.id === widgetId ? { ...widget, status: !widget.status } : widget
    );
    const updatedCategory = { ...currentCategory, widgets: updatedWidgets };
    const updatedCategoriesData = categoriesData.map((category) =>
      category.id === currCategoryId ? updatedCategory : category
    );
    updateCurrCategory(updatedCategory);
    setCategoriesData(updatedCategoriesData);
  };
  const handleListItemClicked = (data) => {
    setWidgetFormData(data);
    setShowWidgetForm(true);
    console.log(data);
  };

  return (
    <div className={styles.widgetsListWrapper}>
      {currentCategory.widgets.map((widget) => (
        <div key={widget.id} className={styles.widgetWrapper}>
          <div className={styles.checkBoxDiv}>
            <input
              type="checkbox"
              onChange={() => handleChangeCheckbox(widget.id)}
              checked={widget.status}
            />
          </div>
          <div
            className={styles.widgetTitleDiv}
            onClick={() => handleListItemClicked(widget)}
          >
            <p>{widget.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WidgetsList;
