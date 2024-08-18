import React from "react";
import styles from "./styles/widgetForm.module.scss";
import { useAppState } from "../../context/AppContext";

const WidgetForm = () => {
  const {
    clearWidgetForm,
    widgetFormData,
    setWidgetFormData,
    addOrUpdateWidget,
    setShowWidgetForm,
  } = useAppState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const widgetData = { ...widgetFormData };
    addOrUpdateWidget(widgetData);
    clearWidgetForm();
  };

  const handleChange = (e) => {
    setWidgetFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCancelBtnClicked = () => {
    setShowWidgetForm(false);
    clearWidgetForm();
  };

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">
            <p>Name</p>
          </label>
          <input
            id="name"
            name="name"
            value={widgetFormData.name}
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="text">
            <p>Text</p>
          </label>
          <input
            id="text"
            name="text"
            type="text"
            value={widgetFormData.text}
            onChange={handleChange}
          />
        </div>
        <div className={styles.buttonGroup}>
          <button
            className={styles.cancelBtn}
            onClick={handleCancelBtnClicked}
            type="button"
          >
            Cancel
          </button>
          <button type="submit">
            {widgetFormData.hasOwnProperty("id") ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default WidgetForm;
