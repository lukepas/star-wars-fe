import React, { ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "classnames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import useWindowSize from "../../hooks/useWindowSize/useWindowSize";
import Navigation from "../Navigation/Navigation";
import { ROUTES } from "../../config/Router/routes";
import { faInfoCircle, faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import styles from "./Layout.module.scss";
import Sidebar from "../Sidebar/Sidebar";

export type Props = {
  children: ReactNode;
};

export type NavigationItem = {
  label: string;
  to: string;
  icon?: IconProp;
};

export type NavigationGroup = {
  label: string;
  items: NavigationItem[];
};

const MOBILE_BREAK_POINT = 900;

const Layout = ({ children }: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileNavigationClick = () =>
    setIsMobileMenuOpen(!isMobileMenuOpen);

  const { width } = useWindowSize();

  const SIDEBAR_ITEMS = [
    {
      label: "STAR WARS",
      items: [
        {
          label: "About",
          to: ROUTES.ABOUT,
          icon: faInfoCircle as IconProp,
        },
        {
          label: "Films",
          to: ROUTES.FILMS,
          icon: faVideoCamera as IconProp,
        },
      ],
    },
  ];

  return (
    <>
      <div className={styles.container}>
        {width && width >= MOBILE_BREAK_POINT && (
          <Sidebar navigationGroups={SIDEBAR_ITEMS} />
        )}
        <div
          className={cx(styles.rightSection, {
            [styles.noScroll]: isMobileMenuOpen,
          })}
        >
          {width && width <= MOBILE_BREAK_POINT && (
            <Navigation
              onDrawerClick={handleMobileNavigationClick}
              isMobileMenuOpen={isMobileMenuOpen}
            />
          )}
          <div className={styles.content}>{children}</div>
        </div>
      </div>
      {isMobileMenuOpen && width && width < MOBILE_BREAK_POINT && (
        <div className={styles.mobileDrawer}>
          {SIDEBAR_ITEMS.map((navigationGroup) => (
            <div className={styles.navigationGroup} key={navigationGroup.label}>
              <div className={styles.groupName}>{navigationGroup.label}</div>
              {navigationGroup.items.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  onClick={handleMobileNavigationClick}
                  className={({ isActive }) =>
                    cx(styles.navigationItem, {
                      [styles.activeSubItem]: isActive,
                    })
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Layout;
