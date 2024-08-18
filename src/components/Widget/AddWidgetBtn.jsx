import React from "react";
import styles from "./styles/addBtn.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useAppState } from "../../context/AppContext";

const AddWidgetBtn = ({ category }) => {
  const { updateCurrCategory, setShowWidgetForm, setShowWidgetMenu } =
    useAppState();

  const handleBtnClicked = () => {
    setShowWidgetMenu(true);
    updateCurrCategory(category);
    setShowWidgetForm(true);
  };

  return (
    <button
      type="button"
      className={styles.btnWrapper}
      onClick={handleBtnClicked}
    >
      <Icon
        icon="ic:round-plus"
        className={styles.icon}
        style={{ color: `#717886` }}
      />
      <p>Add Widget</p>
    </button>
  );
};

export default AddWidgetBtn;
