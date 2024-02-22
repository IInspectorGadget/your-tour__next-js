import { memo } from 'react';
import cx from 'classnames';

import Container from '@/components/commons/Container';
import Image from 'next/image';

import s from './WithUs.module.scss';

const WithUs = ({className}) => {
    return (
        <section className={cx(className, s.root)}>
            <Container className={s.container}>
                <div className={s.inner}>
                    <div className={s.imgWrapper}>
                        <Image 
                            fill 
                            sizes="(max-width: 720px) 40vw, 80vw" 
                            src="assets/images/footer/footer_photo.jpg" 
                            alt="footer_photo" 
                            className={s.img}
                        />
                    </div>
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