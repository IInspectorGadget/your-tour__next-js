import cx from 'classnames';

import Container from '@/components/commons/Container';
import Title from '@/components/commons/Title';
import SubTitle from '@/components/commons/SubTitle';
import HistoryCard from '@/components/commons/HistoryCard';

import s from './History.module.scss';

const cards = [
    {
        id: 1,
        title: "Автостопом в Стамбул",
        paragraph: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:",
        listingItems: ["вкусная еда","дешевый транспорт","красивый город."],
        social: [
            {
                name: "instagram",
                link: "#"
            },
            {
                name: "facebook",
                link: "#"
            },
            {
                name: "YouTube",
                link: "#"
            },
        ],
        detailLink: "#",
        backgroundUrl: "/assets/images/story/story_photo-1.jpg"
    },
    {
        id: 2,
        title: "Автостопом в Стамбул",
        paragraph: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.",
        listingItems: [],
        social: [
            {
                name: "instagram",
                link: "#"
            },
            {
                name: "ВКонтакте",
                link: "#"
            },
        ],

        detailLink: "#",
        backgroundUrl: "/assets/images/story/story_photo-2.jpg"
    },
    {
        id: 3,
        title: "Автостопом в Стамбул",
        paragraph: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.",
        listingItems: [],
        social: [
            {
                name: "instagram",
                link: "#"
            },
            {
                name: "facebook",
                link: "#"
            },
            {
                name: "ВКонтакте",
                link: "#"
            },
        ],

        detailLink: "#",
        backgroundUrl: "/assets/images/story/story_photo-3.jpg"
    }
]

export default function History(){
    return <>
   <section className="travel-history" id="travel-history">
        <Container className={s.container} isTopOffset={true}>
            <Title className={s.title}>Истории путешествий</Title>
            <SubTitle className={s.subtitle}>Идейные соображения высшего порядка, а также рамки и место обучения кадров</SubTitle>
            <div className={s.cards}>
                {
                    cards.map(card => <HistoryCard {...card} ></HistoryCard>)
                }
            </div>
        </Container>
    </section>
    </>
}