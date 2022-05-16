import React from "react";
import classNames from "classnames";

interface ContainerProps {
  className?: string;
  style?: React.CSSProperties;
  row?: boolean;
  contentPadding?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  style,
  row = false,
  contentPadding = false,
}) => {
  const mergedClassName = classNames(
    "flex w-full max-w-5xl px-4 py-2 mx-auto tracking-tight",
    { "flex-col": !row, "justify-between": row },
    { "pt-16": contentPadding },
    className
  );

  return (
    <div className={mergedClassName} style={style}>
      {children}
    </div>
  );
};

export default Container;
