import { memo } from "react";

import cx from "classnames";

import SocialLink from "@/components/commons/SocialLink";
import Image from "next/image";

import s from "./HistoryCard.module.scss";

const HistoryCard = ({ className, title, paragraph, listingItems, social, detailLink, backgroundUrl }) => {
  return (
    <div className={cx(className, s.root, s.card)}>
      <div className={s.gradient}>
        <Image
          fill
          sizes='(max-width: 720px) 90vw, 80vw'
          src={backgroundUrl}
          alt='background'
          className={cx(s.img, s.cardZoom)}
        />
      </div>

      <a href={detailLink} className={cx(s.link, s.cardLink)}></a>

      <div className={s.inner}>
        <div className={s.info}>
          <h3 className={s.title}>{title}</h3>
          <p className={s.paragraph}>{paragraph}</p>
          <ul className={s.list}>
            {listingItems.map((el, idx) => (
              <li key={idx} className={s.item}>
                {el}
              </li>
            ))}
          </ul>
        </div>

        <div className={s.links}>
          <a href={detailLink} className={cx(s.detail, s.cardDetail)}>
            <span className={s.DetailLink}>Подробнее</span>
            <img src='/assets/images/icons/arrow.svg' alt='arrow' className={cx(s.detailArrow, s.cardDetailArrow)} />
          </a>
          <div className={s.social}>
            <ul className={s.socialList}>
              {social.map((el, idx) => (
                <SocialLink key={idx} link={el.link} classLink={s.socialLink} name={el.name} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HistoryCard);
