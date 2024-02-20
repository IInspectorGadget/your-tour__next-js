import cx from 'classnames';

import Container from '@/components/commons/Container';
import Title from '@/components/commons/Title';
import SubTitle from '@/components/commons/SubTitle';
import Gallery from '@/components/commons/Gallery';
import s from './Photos.module.scss';

const pictures = [
    {
        id: 1,
        url: "assets/images/travel/travel_photo-1.jpg",
    },
    {
        id: 2,
        url: "assets/images/travel/travel_photo-2.jpg",
        hidden: "tablet"
    },
    {
        id: 3,
        url: "assets/images/travel/travel_photo-3.jpg",
        hidden: "mobile"
    },
    {
        id: 4,
        url: "assets/images/travel/travel_photo-4.jpg",
    },
    {
        id: 5,
        url: "assets/images/travel/travel_photo-5.jpg",
    },
    {
        id: 6,
        url: "assets/images/travel/travel_photo-6.jpg",
        hidden: "mobile"
    },
    {
        id: 7,
        url: "assets/images/travel/travel_photo-7.jpg",
        hidden: "tablet"
    },
    {
        id: 8,
        url: "assets/images/travel/travel_photo-8.jpg",
    },
    {
        id: 9,
        url: "assets/images/travel/travel_photo-9.jpg",
    },
    {
        id: 10,
        url: "assets/images/travel/travel_photo-10.jpg",
    },
    {
        id: 11,
        url: "assets/images/travel/travel_photo-11.jpg",
    },
    {
        id: 12,
        url: "assets/images/travel/travel_photo-12.jpg",
        hidden: "mobile"
    },
    {
        id: 13,
        url: "assets/images/travel/travel_photo-13.jpg",
        hidden: "tablet"
    },
]

export default function Photos() {
    return <>
        <section className="travel-photo" id="travel-photo">
            <Container className={s.container} isTopOffset={true}>
            <Title className={s.tittle}>Фотографии путешествий</Title>
            <SubTitle className={s.subtitle}>Идейные соображения высшего порядка, а также рамки и место обучения кадров</SubTitle>
            <Gallery pictures={pictures}></Gallery>

            </Container>
        </section>
    </>
}