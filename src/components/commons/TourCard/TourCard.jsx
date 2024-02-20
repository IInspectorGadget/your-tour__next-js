import cx from 'classnames';

import s from './TourCard.module.scss';

const TourCard = ({className, id, type}) => {
    return (
        <div className={cx(className, s.card)} data-id={id} data-type={type}>
            <div className={cx(s[`card_${id}`], s.cardZoom)}></div>
            <a href="#" className={s.cardLink}></a>

            <div className={s.cardInner}>

                <div className={s.cardTop}>
                    <h3 className={s.cardTitle}>Путешествие в горы</h3>
                    <p className={s.cardCost}>от 80 000 руб</p>
                </div>
                <div className={s.cardBottom}>
                    <a href="#" className={s.cardDetail}>
                        <span className={s.cardDetailLink}>Подробнее</span>
                        <img src="assets/images/icons/arrow.svg" alt="arrow" className={s.cardDetailArrow}></img>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default TourCard;