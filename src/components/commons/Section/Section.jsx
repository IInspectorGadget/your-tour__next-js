import cx from "classnames";

import Container from "../Container";
import Title from "../Title";
import SubTitle from "../SubTitle";

import s from "./Section.module.scss";

const Section = ({ className, classContainer, classTitle, classSubTitle, title, subTitle, id, children }) => {
  return (
    <section className={(className, s.root)} id={id}>
      <Container className={classContainer}>
        {title && <Title className={classTitle}>{title}</Title>}
        {subTitle && <SubTitle className={classSubTitle}>{subTitle}</SubTitle>}
        {children}
      </Container>
    </section>
  );
};

export default Section;
