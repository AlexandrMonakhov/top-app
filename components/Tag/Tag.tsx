import React from "react";
import { TagProps } from "./Tag.props";
import styles from "./Tag.module.scss";
import cn from "classnames";

export const Tag = ({
  size = "small",
  color = "ghost",
  href,
  children,
  className,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.small]: size === "small",
        [styles.big]: size === "big",
        [styles.ghost]: color === "ghost",
        [styles.gray]: color === "gray",
        [styles.green]: color === "green",
        [styles.red]: color === "red",
        [styles.primary]: color === "primary",
      })}
      {...props}
    >
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};
