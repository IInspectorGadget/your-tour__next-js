import cx from 'classnames';

import Container from '@/components/commons/Container';
import Title from '@/components/commons/Title';
import SubTitle from '@/components/commons/SubTitle';
import Picture from '@/components/commons/Picture';
import s from './Photos.module.scss';

const pictures = {
    
}

export default function Photos() {
    return <>
        <section className="travel-photo" id="travel-photo">
            <Container className={s.container} isTopOffset={true}>
            <Title className={s.tittle}>Фотографии путешествий</Title>
            <SubTitle className={s.Title}>Идейные соображения высшего порядка, а также рамки и место обучения кадров</SubTitle>
            <div className="travel-photo__list">
                <div className="travel-photo__list-line">
                    <Picture></Picture>
                    <div className="travel-photo__item travel-photo__item_2 travel-photo__item_width_25">
                        <img src="assets/images/travel/travel_photo-2.jpg" alt="travel_photo-2" className="travel-photo__img"></img>
                    </div>
                    <div className="travel-photo__item travel-photo__item_3 travel-photo__item_width_25">
                        <img src="assets/images/travel/travel_photo-3.jpg" alt="travel_photo-3" className="travel-photo__img"></img>
                    </div>
                    <div className="travel-photo__item travel-photo__item_4 travel-photo__item_width_25">
                        <img src="assets/images/travel/travel_photo-4.jpg" alt="travel_photo-4" className="travel-photo__img"></img>
                    </div>
                </div>
                <div className="travel-photo__list-line travel-photo__list-line_middle">
                    <div className="travel-photo__item travel-photo__item_5 travel-photo__item_width_2">
                        <img src="assets/images/travel/travel_photo-5.jpg" alt="travel_photo-5" className="travel-photo__img"></img>
                    </div>
                    <div className="travel-photo__item travel-photo__item_6 travel-photo__item_width_2">
                        <img src="assets/images/travel/travel_photo-6.jpg" alt="travel_photo-6" className="travel-photo__img"></img>
                    </div>
                    <div className="travel-photo__item travel-photo__item_7 travel-photo__item_width_2">
                        <img src="assets/images/travel/travel_photo-7.jpg" alt="travel_photo-7" className="travel-photo__img"></img>
                    </div>
                    <div className="travel-photo__item travel-photo__item_8 travel-photo__item_width_2">
                        <img src="assets/images/travel/travel_photo-8.jpg" alt="travel_photo-8" className="travel-photo__img"></img>
                    </div>
                    <div className="travel-photo__item travel-photo__item_9 travel-photo__item_width_2">
                        <img src="assets/images/travel/travel_photo-9.jpg" alt="travel_photo-9" className="travel-photo__img"></img>
                    </div>
                </div>
                <div className="travel-photo__list-line travel-photo__list-line_bottom">
                    <div className="travel-photo__item travel-photo__item_10 travel-photo__item_width_25">
                        <img src="assets/images/travel/travel_photo-10.jpg" alt="travel_photo-10" className="travel-photo__img"></img>
                    </div>
                    <div className="travel-photo__item travel-photo__item_11 travel-photo__item_width_25">
                        <img src="assets/images/travel/travel_photo-11.jpg" alt="travel_photo-11" className="travel-photo__img"></img>
                    </div>
                    <div className="travel-photo__item travel-photo__item_12 travel-photo__item_width_25">
                        <img src="assets/images/travel/travel_photo-12.jpg" alt="travel_photo-12" className="travel-photo__img"></img>
                    </div>
                    <div className="travel-photo__item travel-photo__item_13 travel-photo__item_width_25">
                        <img src="assets/images/travel/travel_photo-13.jpg" alt="travel_photo-13" className="travel-photo__img"></img>
                    </div>
                </div>

            </div>

            </Container>
        </section>
    </>
}