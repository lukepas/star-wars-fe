import React from "react";
import styles from "./Navigation.module.scss";

import { IconButton } from "@mui/material";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import useWindowSize from "../../hooks/useWindowSize/useWindowSize";

export type Props = {
  onDrawerClick: () => void;
  isMobileMenuOpen: boolean;
};

const MOBILE_BREAK_POINT = 900;

export const Navigation = ({ onDrawerClick, isMobileMenuOpen }: Props) => {
  const { width } = useWindowSize();

  return (
    <>
      <header className={styles.navigationContainer}>
        <div className={styles.iconItems}>
          {width && width < MOBILE_BREAK_POINT && (
            <IconButton onClick={() => onDrawerClick()}>
              <FontAwesomeIcon
                icon={(isMobileMenuOpen ? faTimes : faBars) as IconProp}
                fixedWidth
                size="sm"
              />
            </IconButton>
          )}
        </div>
      </header>
    </>
  );
};

export default Navigation;
