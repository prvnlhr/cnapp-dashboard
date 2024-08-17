import React from "react";
import styles from "./styles/header.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";

const BreadCrumb = ({ breadcrumb, index, data }) => {
  return (
    <div className={styles.breadCrumbWrapper}>
      <div className={styles.textDiv}>
        <p>{breadcrumb.text}</p>
      </div>
      {index !== data.length - 1 && (
        <div className={styles.chevIconDiv}>
          <Icon className={styles.icon} icon="tabler:chevron-right" />
        </div>
      )}
    </div>
  );
};
const Header = () => {
  const breadCrumbs = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Dashboard V2",
      href: "",
    },
  ];
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.breadCrumbsBar}>
        {breadCrumbs.map((breadcrumb, index, data) => (
          <BreadCrumb
            key={index}
            data={data}
            breadcrumb={breadcrumb}
            index={index}
          />
        ))}
      </div>
      <div className={styles.searchBarWrapper}>
        <div className={styles.searchIconDiv}>
          <Icon className={styles.searchIcon} icon="humbleicons:search" />
        </div>
        <div className={styles.searchInputDiv}>
          <input placeholder="Search anything..." />
        </div>
      </div>
    </div>
  );
};

export default Header;
