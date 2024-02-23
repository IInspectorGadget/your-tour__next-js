import { memo } from "react";
import cx from "classnames";

import Radio from "../Radio";

import s from "./Adult.module.scss";

const Adult = ({ className, isRequired }) => {
  return (
    <div className={cx(className, s.root)} required={isRequired}>
      <div className={s.item}>
        <Radio value='yes' id='yes' name='adult' label='Да' />
      </div>
      <div className={s.item}>
        <Radio value='no' id='no' name='adult' label='Нет' />
      </div>
    </div>
  );
};

export default memo(Adult);
