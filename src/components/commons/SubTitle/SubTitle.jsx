import { memo } from "react";

import cx from "classnames";

import s from "./SubTitle.module.scss";

const SubTitle = ({ className, children }) => {
  return <p className={cx(s.root, className)}>{children}</p>;
};

export default memo(SubTitle);
