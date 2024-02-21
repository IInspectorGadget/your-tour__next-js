import cx from "classnames"
import { memo, useState } from "react"

import Container from "@/components/commons/Container"
import Title from "@/components/commons/Title"
import TourCard from "@/components/commons/TourCard"

import s from "./Tours.module.scss"

const items = [
    {
        id: 1,
        types: ["Популярные"],
        imageUrl: "/assets/images/cards/card_tour_photo-1.jpg",
        url:"#"
    },
    {
        id: 2,
        types: ["Популярные"],
        imageUrl: "/assets/images/cards/card_tour_photo-2.jpg",
        url:"#"
    },
    {
        id: 3,
        types: ["Популярные", "Велопрогулки"],
        imageUrl: "/assets/images/cards/card_tour_photo-3.jpg",
        url:"#"
    },
    {
        id: 4,
        types: ["Популярные", "Авторский"],
        imageUrl: "/assets/images/cards/card_tour_photo-4.jpg",
        url:"#"
    },
    {
        id: 5,
        types: ["Популярные", "Походы"],
        imageUrl: "/assets/images/cards/card_tour_photo-5.jpg",
        url:"#"
    },
    {
        id: 6,
        types: ["Популярные", "Сплавы"],
        imageUrl: "/assets/images/cards/card_tour_photo-6.jpg",
        url:"#"
    }
]


const Tours = ({id}) => {
    const [selectedFilter, setSelectedFilter] = useState("Популярные");
    const [filteredItems, setFilteredItems] = useState(items.filter(el => el.types.includes("Популярные")));
    const filters = ["Популярные", "Авторский", "Походы", "Сплавы", "Велопрогулки"]

    const handlerClick = (type) => {
        setFilteredItems(items.filter(el => el.types.includes(type)));
        setSelectedFilter(type);
    }

    return (
        <section className={s.root} id={id}>
            <Container className={s.container}>
                <Title className={s.title}>Выбери свой тур</Title>
                <ul className={s.list}>
                    {filters.map((type, idx) =>
                        <li onClick={() => handlerClick(type)} key={idx} className={cx(s.item, {[s.itemActive]: selectedFilter === type})}>{type}</li>
                    )}
                </ul>

                <div className={s.cards}>
                    {filteredItems.map(el => (
                        <TourCard key={el.id} {...el}></TourCard>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default memo(Tours)