import { useEffect, useRef, memo } from "react";
import Container from "../Container"
import s from "./Header.module.scss"

const Header = ({routes}) => {
    const header = useRef(null);

    useEffect(() => {
        const startChangeHight = 450;

        const handlerScroll = () => {
            let scrollDistance = window.scrollY;

            if (scrollDistance >= startChangeHight) {
                header.current.classList.add(s.wrapperScroll);
            } else {
                header.current.classList.remove(s.wrapperScroll);
            }
        }

        window.addEventListener("scroll", handlerScroll);

        return () => {
            window.removeEventListener("scroll", handlerScroll);
        };

    }, [])

    return (
        <header ref={header} className={s.root}>
            <div className={s.wrapper}>
                <Container className={s.container}>
                    <a href="#" className={s.link}>
                        <img className={s.logo} src="assets/images/header/YourTour.svg" alt="logo"/>
                    </a>
                    <nav className={s.nav}>
                        <ul className={s.navList}>
                            {
                                Object.keys(routes).map((key, idx) => (
                                    <li className={s.navItem}><a href={`#${routes[key].id}`} className={s.navLink}>{routes[key].name}</a></li>
                                ))
                            }
                        </ul>
                    </nav>
                    <a className={s.phone} href="tel:+79999999999">+7 999 999 99 99</a>
                </Container>
            </div>
        </header>
    )
}

export default memo(Header);