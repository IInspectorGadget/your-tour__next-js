import cx from 'classnames';
import { memo } from 'react';

import s from './Review.module.scss';

const Review = ({className, name, tour, text, photo}) => {
    return (
        <div className={cx(className,s.root)}>
            <div className={s.text}>
                {text.map((paragraph,idx) => <p key={idx} className={s.paragraph}>{idx ? <br></br>: ""}{paragraph}</p>)}
            </div>
            
            <div className={s.footer}>
                <div className={s.footerText}>
                    <h3 className={s.name}>{name}</h3>
                    <p className={s.tourName}>Тур: {tour}</p>
                </div>
                <img src={photo} alt={name} className={s.footerImg}></img>
            </div>
        </div>
    )
};

export default memo(Review);