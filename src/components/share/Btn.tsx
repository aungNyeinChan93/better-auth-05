import React, { ComponentProps, FC, ReactNode } from "react";

interface BtnProps extends ComponentProps<"button"> {
  className: string;
  children: ReactNode;
}

const Btn: FC<BtnProps> = ({ className, children, ...props }) => {
  return (
    <React.Fragment>
      <button className={className} {...props}>
        {children}
      </button>
    </React.Fragment>
  );
};

export default Btn;
