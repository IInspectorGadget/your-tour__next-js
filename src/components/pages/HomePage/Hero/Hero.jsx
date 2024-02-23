import { memo } from "react";

import Container from "@/components/commons/Container";

import s from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={s.root}>
      <Container className={s.container}>
        <h1 className={s.title}>Идеальные путешествия существуют</h1>
        <p className={s.subtitle}>Идейные соображения высшего порядка, а также рамки и место обучения кадров</p>
        <a href='#' className={s.button}>
          Найти тур
        </a>
      </Container>
    </section>
  );
};

export default memo(Hero);
