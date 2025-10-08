import React, { ComponentProps, ReactNode } from "react";

interface Props {
  className: string;
  children: ReactNode;
  inputProps: ComponentProps<"input">;
  btnProps: ComponentProps<"button">;
  formProps: ComponentProps<"form">;
}

const CustomeForm = ({
  className,
  children,
  inputProps,
  btnProps,
  formProps,
}: Props) => {
  return (
    <React.Fragment>
      <form className={className} {...formProps}>
        <p>{children}</p>
        <input {...inputProps} />
        <button {...btnProps}> Btn</button>
      </form>
    </React.Fragment>
  );
};

export default CustomeForm;
