import cx from "classnames";

import Image from "next/image";

import s from "./Picture.module.scss";

const Picture = ({ className, url, hidden, isLarge, alt }) => {
  return (
    <div
      className={cx(className, s.root, s[hidden], {
        [s.large]: isLarge,
        [s.small]: !isLarge,
      })}
    >
      <div className={s.fill}></div>
      <Image src={url} sizes='(max-width: 720px) 60vw, 35vw' alt={alt} className={s.img} fill />
    </div>
  );
};

export default Picture;
