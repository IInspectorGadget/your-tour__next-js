import Container from "../Container"
import s from "./Header.module.scss"

export default function Header(){
    return (
    <header className={s.root}>
        <div className={s.wrapper}>
            <Container className={s.container}>
                <a href="#" className={s.link}>
                        <img className={s.logo} src="assets/images/header/YourTour.svg" alt="logo"></img>
                    </a>
                    <nav className={s.nav}>
                        <ul className={s.navList}>
                            <li className={s.navItem}><a href="#collect-tour" className={s.navLink}>Создать тур</a></li>
                            <li className={s.navItem}><a href="#chooseTour" className={s.navLink}>Туры</a></li>
                            <li className={s.navItem}><a href="#reviews" className={s.navLink}>Отзывы</a></li>
                            <li className={s.navItem}><a href="#travel-history" className={s.navLink}>Истории</a></li>
                        </ul>
                    </nav>
                <a className={s.phone} href="tel:+79999999999">+7 999 999 99 99</a>
            </Container>
        </div>
    </header>
    )
}