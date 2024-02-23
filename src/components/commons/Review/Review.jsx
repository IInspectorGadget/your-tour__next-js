import { memo } from "react";
import cx from "classnames";

import Image from "next/image";

import s from "./Review.module.scss";

const Review = ({ className, name, tour, text, photo }) => {
  return (
    <div className={cx(className, s.root)}>
      <div className={s.text}>
        {text.map((paragraph, idx) => (
          <p key={idx} className={s.paragraph}>
            {idx && <br />}
            {paragraph}
          </p>
        ))}
      </div>

      <div className={s.footer}>
        <div className={s.footerText}>
          <h3 className={s.name}>{name}</h3>
          <p className={s.tourName}>Тур: {tour}</p>
        </div>
        <div className={s.footerImageWrapper}>
          <Image fill sizes='(max-width: 720px) 30vw, 20vw' src={photo} alt={name} className={s.footerImg} />
        </div>
      </div>
    </div>
  );
};

export default memo(Review);
