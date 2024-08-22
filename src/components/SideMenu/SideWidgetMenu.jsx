import React from "react";
import styles from "./styles/sideWidgetMenu.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import WidgetForm from "./WidgetForm";
import { useAppState } from "../../context/AppContext";
import WidgetsList from "./WidgetsList";

const Tab = ({ category }) => {
  const { currentCategory, updateCurrCategory } = useAppState();
  return (
    <button
      type="button"
      onClick={() => updateCurrCategory(category)}
      className={`${styles.tab} ${
        currentCategory.id === category.id && styles["tab--active"]
      }`}
    >
      {category.shortName}
    </button>
  );
};

const SideWidgetMenu = () => {
  const {
    showWidgetMenu,
    toggleWidgetMenu,
    currentCategory,
    showWidgetForm,
    clearWidgetForm,
    categoriesData,
    setShowWidgetMenu,
    setShowWidgetForm,
  } = useAppState();

  const handleCloseBtnClicked = () => {
    clearWidgetForm();
    setShowWidgetMenu(false);
    setShowWidgetForm(false);
  };

  return (
    <div
      className={`${styles.modalWrapper} ${
        !showWidgetMenu && styles["modalWrapper--hidden"]
      }`}
    >
      <div className={styles.header}>
        <p>Add Widget</p>
        <Icon
          onClick={handleCloseBtnClicked}
          className={styles.modalCloseIcon}
          icon="akar-icons:cross"
          style={{ color: "white" }}
        />
      </div>
      <div className={styles.tabsBar}>
        <div className={styles.tabsHeadingDiv}>
          <p>Personalize your dashboard by adding the following widget</p>
        </div>
        <div className={styles.tabsWrapper}>
          {categoriesData &&
            categoriesData.map((category) => (
              <Tab key={category.id} category={category} />
            ))}
        </div>
      </div>
      <div className={styles.contentWrapper}>
        {showWidgetForm ? <WidgetForm /> : currentCategory && <WidgetsList />}
      </div>
    </div>
  );
};

export default SideWidgetMenu;
