import { memo } from "react"

import Section from "@/components/commons/Section"
import Review from "@/components/commons/Review"

import s from "./Reviews.module.scss"


import {reviews} from "@/data"


const Reviews = ({id}) => {
    return (
        <Section 
            className={s.root} 
            classContainer={s.container}
            classTitle={s.title}
            classSubTitle={s.subtitle}
            id = {id}
            title = {"Отзывы наших путешественников"}
            subTitle={"Идейные соображения высшего порядка, а также рамки и место обучения кадров"}
        >
            <div className={s.list}>
                {reviews.map((el,idx) => (
                    <Review key={idx} {...el} ></Review>
            ))}
            </div>
        </Section>
        
    )
}

export default memo(Reviews)