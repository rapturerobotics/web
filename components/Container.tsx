import React from "react";
import classNames from "classnames";

interface ContainerProps {
  className?: string;
  style?: React.CSSProperties;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  style,
}) => {
  const mergedClassName = classNames(
    "flex flex-col w-full max-w-5xl pt-8 mx-auto tracking-tight",
    className
  );

  return (
    <div className={mergedClassName} style={style}>
      {children}
    </div>
  );
};

export default Container;
