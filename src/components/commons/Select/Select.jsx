import cx from "classnames";

import s from "./Select.module.scss";

const Select = ({ className, options, id, isRequired, defaultValue }) => {
  return (
    <div className={cx(className, s.root)}>
      <select defaultValue={defaultValue} required={isRequired} id={id} name={id} className={cx(s.field, s.direction)}>
        {options.map((option, idx) => (
          <option
            key={idx}
            className={s.option}
            value={option.value}
            defaultValue={option.selected ? true : false}
            disabled={option.disabled ? true : false}
          >
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
