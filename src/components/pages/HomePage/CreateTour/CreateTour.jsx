import cx from 'classnames';
import { memo } from 'react';

import Container from "@/components/commons/Container"
import Title from '@/components/commons/Title';
import SubTitle from '@/components/commons/SubTitle';
import Form from '@/components/commons/Form';

import s from './CreateTour.module.scss';

const CreateTour = ({id}) => {
    return (
        <section className={s.root} id={id}>
            <Container className={s.container}>
                <Title className={s.title}>Собери свой тур</Title>
                <SubTitle className={s.subtitle}>Идейные соображения высшего порядка, а также рамки и место обучения кадров</SubTitle>
                <div className={s.form}>
                    <Form></Form>
                </div>
            </Container>
        </section>
    )
}

export default memo(CreateTour)