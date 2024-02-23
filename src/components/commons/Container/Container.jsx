import cx from "classnames";

import { memo } from "react";

import s from "./Container.module.scss";

const Container = ({ className, children }) => {
  return <div className={cx(s.container, className)}>{children}</div>;
};

export default memo(Container);
