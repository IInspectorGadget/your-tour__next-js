import { memo } from "react";

import cx from "classnames";

import Row from "@/components/commons/Row";

import s from "./Gallery.module.scss";

const Gallery = ({ className, pictures }) => {
  return (
    <div className={cx(className, s.root)}>
      <Row pictures={pictures.slice(0, 4)} />
      <Row isSmallGap pictures={pictures.slice(4, 9)} isSmallImages />
      <Row isSmallGap pictures={pictures.slice(9)} />
    </div>
  );
};

export default memo(Gallery);
