import React from "react";
import styles from "./styles/menuBtn.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";

const MenuBtn = () => {
  return (
    <div className={styles.btnWrapper}>
      <Icon
        icon="iconamoon:menu-kebab-vertical-bold"
        style={{ color: "#495464" }}
      />
    </div>
  );
};

export default MenuBtn;
