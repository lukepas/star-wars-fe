import React from "react";
import styles from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import cx from "classnames";
import { NavigationGroup } from "../Layout/Layout";

type Props = {
  navigationGroups: NavigationGroup[];
};

const Sidebar = ({ navigationGroups }: Props) => {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarContent}>
        <div className={styles.mainContent}>
          <div className={styles.menuItemsContainer}>
            {navigationGroups.map((sidebarItem) => (
              <div className={styles.menuItems} key={sidebarItem.label}>
                <div className={styles.menuItemsTitle}>{sidebarItem.label}</div>
                <div className={styles.menuSubItemsContainer}>
                  <div className={styles.menuSubItems}>
                    {sidebarItem.items.map((navItem) => (
                      <div
                        key={navItem.to + navItem.label}
                        className={styles.subItemContainer}
                      >
                        <NavLink
                          to={navItem.to}
                          className={({ isActive }) =>
                            cx(styles.subItem, {
                              [styles.activeSubItem]: isActive,
                            })
                          }
                        >
                          <FontAwesomeIcon
                            icon={navItem.icon as IconProp}
                            className={styles.navigationIcon}
                            fixedWidth
                          />
                          <div className={styles.navigationText}>
                            {navItem.label}
                          </div>
                        </NavLink>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
