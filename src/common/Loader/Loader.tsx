import React, { ReactNode } from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import styles from "./Loader.module.scss";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

export type Props = {
  children?: ReactNode;
  isLoading: boolean;
  isFullScreen?: boolean;
  height?: string;
  className?: string;
  size?: SizeProp;
};

const Loader = ({
  children,
  isLoading,
  isFullScreen,
  height,
  className,
  size = "lg",
}: Props) => (
  <div
    className={cx(styles.loader, className, {
      [styles.fullScreen]: isFullScreen,
    })}
    style={{ height: height }}
  >
    {isLoading && (
      <div className={styles.loaderIcon}>
        <FontAwesomeIcon icon={faCircleNotch as IconProp} spin size={size} />
      </div>
    )}
    <div
      className={cx(styles.children, { [styles.loaderChildren]: isLoading })}
    >
      {children}
    </div>
  </div>
);

export default Loader;
