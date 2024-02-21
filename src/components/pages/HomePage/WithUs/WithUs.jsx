import cx from 'classnames';
import { memo } from 'react';

import Container from '@/components/commons/Container';

import s from './WithUs.module.scss';

const WithUs = ({className}) => {
    return (
        <section className={cx(className, s.root)}>
            <Container className={s.container}>
                <div className={s.inner}>
                    <img src="assets/images/footer/footer_photo.jpg" alt="footer_photo" className={s.img}/>
                    <div className={s.text}>
                        <h3 className={s.title}>Пора в путешествие вместе с нами!</h3>
                        <p className={s.subtitle}>Напиши на почту и узнай подробности на <a href="mailto:yourtour@gmail.com" className={s.email}>yourtour@gmail.com</a></p>
                    </div>
                </div>
            </Container>
		</section>
    )
};

export default memo(WithUs);