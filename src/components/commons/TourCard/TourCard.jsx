import { memo } from 'react';

import cx from 'classnames';

import s from './TourCard.module.scss';

const TourCard = ({className, imageUrl, url, title, cost}) => {
    return (
        <div className={cx(className, s.root, s.card)}>
            <div className={s.gradient}>
                <img src={imageUrl} alt="background" className={cx(s.img,s.cardZoom)}/>
            </div>
            <a href={url} className={s.cardLink}></a>

            <div className={s.inner}>

                <div className={s.top}>
                    <h3 className={s.title}>{title}</h3>
                    <p className={s.cost}>от {cost} руб</p>
                </div>
                <div className={s.bottom}>
                    <a href="#" className={cx(s.detail ,s.cardDetail)}>
                        <span className={s.detailLink}>Подробнее</span>
                        <img src={'assets/images/icons/arrow.svg'} alt="arrow" className={cx(s.detailArrow,s.cardDetailArrow)}/>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default memo(TourCard);