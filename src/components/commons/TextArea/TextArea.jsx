import { memo } from "react";
import cx from "classnames";

import s from "./TextArea.module.scss";

const TextArea = ({ className, id }) => {
  return <textarea id={id} name={id} className={cx(className, s.field, s.root)} />;
};

export default memo(TextArea);
