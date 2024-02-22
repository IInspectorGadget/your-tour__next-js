import { memo } from 'react';

import cx from 'classnames';

import Container from '../Container';
import SocialLink from '../SocialLink';

import s from './Footer.module.scss';


import {links} from "@/data"

const Footer = ({className}) => {
    return (
        <footer className={cx(className, s.footer)}>
            <Container className={s.container} isTopOffset={true}>
                <div className={s.inner}>
                    <p className={s.paragraph}>Наши социальные сети</p>
                    <ul className={s.list}>
                        {
                            links.map((link, idx) => <SocialLink className={s.item} key = {idx} {...link} classLink={s.link}></SocialLink>)
                        }
                    </ul>
                </div>
            </Container>
		</footer>
    )
};

export default memo(Footer);