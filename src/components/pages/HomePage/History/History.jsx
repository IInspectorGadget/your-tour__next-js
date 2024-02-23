import { memo } from "react";
import cx from "classnames";

import Section from "@/components/commons/Section";
import HistoryCard from "@/components/commons/HistoryCard";

import s from "./History.module.scss";

import { historyCards as cards } from "@/data";

const History = ({ id }) => {
  return (
    <Section
      className={s.root}
      classContainer={s.container}
      classTitle={s.title}
      classSubTitle={s.subtitle}
      id={id}
      title='История путешествий'
      subTitle='Идейные соображения высшего порядка, а также рамки и место обучения кадров'
    >
      <div className={s.cards}>
        {cards.map((card) => (
          <HistoryCard
            className={s.card}
            key={card.id}
            backgroundUrl={card.backgroundUrl}
            detailLink={card.detailLink}
            listingItems={card.listingItems}
            paragraph={card.paragraph}
            social={card.social}
            title={card.title}
          />
        ))}
      </div>
    </Section>
  );
};

export default memo(History);
