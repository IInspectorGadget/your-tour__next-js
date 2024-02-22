import cx from 'classnames';
import { memo } from 'react';

import Section from '@/components/commons/Section';
import Form from '@/components/commons/Form';

import s from './CreateTour.module.scss';

const CreateTour = ({id}) => {
    return (
        <Section 
            className={s.root} 
            classContainer={s.container}
            classTitle={s.title}
            classSubTitle={s.subtitle}
            id = {id}
            title = {"Собери свой тур"}
            subTitle={"Идейные соображения высшего порядка, а также рамки и место обучения кадров"}
            >
            <div className={s.form}>
                <Form></Form>
            </div>
        </Section>
    )
}

export default memo(CreateTour)