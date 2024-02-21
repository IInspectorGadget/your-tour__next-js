import cx from 'classnames';

import Container from '@/components/commons/Container';

import s from './WithUs.module.scss';

const WithUs = ({className}) => {
    return (
        <section class="withUs">
            <Container className={s.container} isTopOffset={true}>
                <div class={s.inner}>
                    <img src="assets/images/footer/footer_photo.jpg" alt="footer_photo" class={s.img}/>
                    <div class={s.text}>
                        <h3 class={s.title}>Пора в путешествие вместе с нами!</h3>
                        <p class={s.subtitle}>Напиши на почту и узнай подробности на <a href="mailto:yourtour@gmail.com" class={s.email}>yourtour@gmail.com</a></p>
                    </div>
                </div>
            </Container>
                
		</section>
    )
};

export default WithUs;