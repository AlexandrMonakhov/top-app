import React from "react";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.scss";
import cn from "classnames";

import ArrowIcon from "./assets/img/arrow.svg";

export const Button = ({
  appearance = "primary",
  arrow = "none",
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <ArrowIcon
          className={cn(styles.arrow, {
            [styles.down]: arrow === "down",
          })}
        />
      )}
    </button>
  );
};
