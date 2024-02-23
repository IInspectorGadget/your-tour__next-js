import cx from "classnames";
import { memo } from "react";

import Section from "@/components/commons/Section";
import Gallery from "@/components/commons/Gallery";

import s from "./Photos.module.scss";

import { pictures } from "@/data";

const Photos = () => {
  return (
    <Section
      className={s.root}
      classContainer={s.container}
      classTitle={s.title}
      classSubTitle={s.subtitle}
      title='Фотографии путешествий'
      subTitle='Идейные соображения высшего порядка, а также рамки и место обучения кадров'
    >
      <Gallery pictures={pictures} />
    </Section>
  );
};

export default memo(Photos);
