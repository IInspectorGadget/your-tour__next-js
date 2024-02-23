import { memo } from "react";
import s from "./Radio.module.scss";

const Radio = ({ value, id, name, label }) => {
  return (
    <>
      <div className={s.button}>
        <input value={value} id={id} name={name} type='radio' className={s.radio} />
      </div>
      <label htmlFor={id} className={s.label}>
        {label}
      </label>
    </>
  );
};

export default memo(Radio);
