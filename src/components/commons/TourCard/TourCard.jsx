import cx from 'classnames';

import s from './TourCard.module.scss';
import { memo } from 'react';

const TourCard = ({className, imageUrl, url}) => {
    return (
        <div className={cx(className, s.root, s.card)}>
            <div className={s.gradient}>
                <img src={imageUrl} alt="background" className={cx(s.img,s.cardZoom)}/>
            </div>
            <a href={url} className={s.cardLink}></a>

            <div className={s.inner}>

                <div className={s.top}>
                    <h3 className={s.title}>Путешествие в горы</h3>
                    <p className={s.cost}>от 80 000 руб</p>
                </div>
                <div className={s.bottom}>
                    <a href="#" className={cx(s.detail ,s.cardDetail)}>
                        <span className={s.detailLink}>Подробнее</span>
                        <img src="assets/images/icons/arrow.svg" alt="arrow" className={cx(s.detailArrow,s.cardDetailArrow)}></img>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default memo(TourCard);