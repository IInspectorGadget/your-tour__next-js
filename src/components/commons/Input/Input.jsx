import { forwardRef, memo } from "react";
import cx from "classnames";

import s from "./Input.module.scss";

const Input = forwardRef(
  ({ className, type, placeholder, name, id, max, maxLength, handlers, isRequired, value }, ref) => {
    return (
      <input
        ref={ref}
        {...handlers}
        required={isRequired}
        max={max}
        maxLength={maxLength}
        autoComplete='on'
        value={value}
        id={id}
        name={name}
        type={type}
        className={cx(className, s.field, { [s.date]: type === "date" })}
        placeholder={placeholder}
      />
    );
  },
);

Input.displayName = "Input";

export default memo(Input);
