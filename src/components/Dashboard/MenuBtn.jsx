import React from "react";
import styles from "./styles/menuBtn.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useAppState } from "../../context/AppContext";

const MenuBtn = () => {
  const { toggleWidgetMenu } = useAppState();
  return (
    <div className={styles.btnWrapper} onClick={toggleWidgetMenu}>
      <Icon
        icon="iconamoon:menu-kebab-vertical-bold"
        style={{ color: "#495464" }}
      />
    </div>
  );
};

export default MenuBtn;
