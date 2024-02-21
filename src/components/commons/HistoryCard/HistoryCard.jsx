import cx from 'classnames';



import s from './HistoryCard.module.scss';
import SocialLink from '../SocialLink';

const HistoryCard = ({title, paragraph, listingItems, social, detailLink,backgroundUrl}) => {
    return (
        <div className={s.card}>

            <div style={{
                    background: `linear-gradient(270deg, rgba(0, 0, 0, 0) 0.01%, rgba(0, 0, 0, 0.2) 100%), url(${backgroundUrl}) center/cover;`
                }} 
                className={s.cardZoom}>
            </div>

            <a href={detailLink} className={cx(s.link,s.cardLink)}></a>

            <div className={s.inner}>
                <div className={s.info}>
                    <h3 className={s.title}>{title}</h3>
                    <p className={s.paragraph}>{paragraph}</p>
                    <ul className={s.list}>
                        {
                            listingItems.map((el,idx) => <li key={idx} className={s.item}>{el}</li>)
                        }
                    </ul>
                </div>
                <div className={s.links}>	
                    <a href={detailLink}  className={cx(s.detail, s.cardDetail)}>
                        <span className={s.DetailLink}>Подробнее</span>
                        <img src="assets/images/icons/arrow.svg" alt="arrow" className={cx(s.detailArrow, s.cardDetailArrow)}></img>
                    </a>
                    <div className={s.social}>
                        <ul className={s.socialList}>
                            {

                                social.map((el, idx) => <SocialLink link={el.link}  classLink={s.socialLink} name={el.name}/> )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default HistoryCard;