import cx from 'classnames';
import { memo } from 'react';

import Container from '../Container';
import SocialLink from '../SocialLink';

import s from './Footer.module.scss';


const links = [
    {
        name: "instagram",
        link: "#",
        iconUrl: "assets/images/icons/inst.svg",
    },
    {
        name: "facebook",
        link: "#",
        iconUrl: "assets/images/icons/facebook.svg",
    },
    {
        name: "vkontakte",
        link: "#",
        iconUrl: "assets/images/icons/vk.svg",
    }
]

const Footer = ({className}) => {
    return (
        <footer className={cx(className, s.footer)}>
            <Container className={s.container} isTopOffset={true}>
                <div className={s.inner}>
                    <p className={s.paragraph}>Наши социальные сети</p>
                    <ul className={s.list}>
                        {
                            links.map((link, idx) => <SocialLink key = {idx} {...link} classLink={s.link}></SocialLink>)
                        }
                    </ul>
                </div>
            </Container>
		</footer>
    )
};

export default memo(Footer);