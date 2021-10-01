import React from "react";
import { PProps } from "./P.props";

import styles from "./P.module.scss";

import cn from "classnames";

export const P = ({
  size = "medium",
  children,
  className,
  ...props
}: PProps): JSX.Element => {
  return (
    <p
      className={cn(className, {
        [styles.pSmall]: size === "small",
        [styles.pMedium]: size === "medium",
        [styles.pBig]: size === "big",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
