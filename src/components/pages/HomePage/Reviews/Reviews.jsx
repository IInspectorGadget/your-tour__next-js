import Container from "@/components/commons/Container"
import Title from "@/components/commons/Title"
import SubTitle from "@/components/commons/SubTitle"
import Review from "@/components/commons/Review"
import s from "./Reviews.module.scss"


const reviews = [
    {
        name: "Мария",
        tour: "Вдали от дома",
        photo: "assets/images/review/review_photo-1.jpg",
        text: ["Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития."]
    },
    {
        name: "Павел", 
        tour: "Путешествие в горы",
        photo: "assets/images/review/review_photo-2.jpg",
        text : [
            "Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.",
            "Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития."
        ]
    }
]


export default function Reviews(){
    return <>
   <section className={s.reviews} id="reviews">
    <Container className={s.container} isTopOffset={true}>
        <Title className={s.title}>Отзывы наших путешественников</Title>
        <SubTitle className={s.subTitle}>Идейные соображения высшего порядка, а также рамки и место обучения кадров</SubTitle>
        <div className={s.list}>
            {reviews.map((el,idx) => (
                <Review key={idx} {...el} ></Review>
            ))}

        </div>
    </Container>
   
    </section>
    </>
}