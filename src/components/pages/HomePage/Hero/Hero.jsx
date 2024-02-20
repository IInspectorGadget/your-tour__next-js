import Container from "@/components/commons/Container"
import s from "./Hero.module.scss"

export default function Hero(){
    return <>
    <section className={s.greetings}>
        <Container className={s.container}>
            <h1 className={s.title}>Идеальные путешествия существуют</h1>
            <p className={s.subtitle}>Идейные соображения высшего порядка, а также рамки и место обучения кадров</p>
            <a href="#" className={s.button}>Найти тур</a>
        </Container>
    </section>
    </>
}