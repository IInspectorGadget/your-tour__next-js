import { useState } from "react"

import Container from "@/components/commons/Container"
import Title from "@/components/commons/Title"
import TourCard from "@/components/commons/TourCard"
import s from "./Tours.module.scss" 
import cx from "classnames"

const items = [
    {
        id: 1,
        types: ["Популярные"]
    },
    {
        id: 2,
        types: ["Популярные"]
    },
    {
        id: 3,
        types: ["Популярные", "Велопрогулки"]
    },
    {
        id: 4,
        types: ["Популярные", "Авторский"]
    },
    {
        id: 5,
        types: ["Популярные", "Походы"]
    },
    {
        id: 6,
        types: ["Популярные", "Сплавы"]
    }
]


export default function Tours(){
    const [selectedFilter, setSelectedFilter] = useState("Популярные");
    const [filteredItems, setFilteredItems] = useState(items.filter(el => el.types.includes("Популярные")));
    const filters = ["Популярные", "Авторский", "Походы", "Сплавы", "Велопрогулки" ]

    const handlerClick = (type) => {
        setFilteredItems(items.filter(el => el.types.includes(type)));
        setSelectedFilter(type);
    }

    return(
        <section className={s.chooseTour} id="chooseTour">
            <Container className={s.container} isTopOffset={true}>
                <Title className="title">Выбери свой тур</Title>
                <ul className={s.list}>
                    {filters.map((type, idx) => 
                        <li onClick={() => handlerClick(type)} key={idx} className={selectedFilter === type ? cx(s.item, s.itemActive): s.item}>{type}</li>
                    )}
                </ul>

                <div className={s.cards}>
                    {filteredItems.map(el => (
                        <TourCard key={el.id} id={el.id}></TourCard>
                    ))}
                </div>
            </Container>
        </section>
    )
}