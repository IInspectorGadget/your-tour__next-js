import cx from "classnames"
import { memo, useState } from "react"

import Section from "@/components/commons/Section"
import TourCard from "@/components/commons/TourCard"

import s from "./Tours.module.scss"

import {tours as items} from "@/data"


const Tours = ({id}) => {
    const [selectedFilter, setSelectedFilter] = useState("Популярные");
    const [filteredItems, setFilteredItems] = useState(items.filter(el => el.types.includes("Популярные")));
    const filters = ["Популярные", "Авторский", "Походы", "Сплавы", "Велопрогулки"]

    const handlerClick = (type) => {
        setFilteredItems(items.filter(el => el.types.includes(type)));
        setSelectedFilter(type);
    }

    return (
     
        <Section
            className={s.root} 
            classContainer={s.container}
            classTitle={s.title}
            classSubTitle={s.subtitle}
            id = {id}
            title = {"Выбери свой тур"}
        >
            <ul className={s.list}>
                {filters.map((type, idx) =>
                    <li onClick={() => handlerClick(type)} key={idx} className={cx(s.item, {[s.itemActive]: selectedFilter === type})}>{type}</li>
                )}
            </ul>

            <div className={s.cards}>
                {filteredItems.map(el => (
                    <TourCard key={el.id} {...el}/>
                ))}
            </div>
        </Section>
    )
}

export default memo(Tours)