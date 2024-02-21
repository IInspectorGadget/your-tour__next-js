import Header from "@/components/commons/Header/Header"
import Hero from "./Hero/Hero"
import Tours from "./Tours/Tours"
import CreateTour from "./CreateTour/CreateTour"
import Reviews from "./Reviews/Reviews"
import Photos from "./Photos/Photos"
import History from "./History/History"
import WithUs from "./WithUs"
import Footer from "@/components/commons/Footer"

import s from "./HomePage.module.scss"

export default function HomePage() {
    const routes = {
        tours: {
            id: "tours",
            name: "Туры",
        },
        createTour: {
            id: "createTour",
            name: "Создать тур",
        },
        reviews: {
            id: "reviews",
            name: "Отзывы",
        },
        history: {
            id: "history",
            name: "История",
        },
    }

    return <>
        <Header routes={routes}></Header>
        <Hero></Hero>
        <Tours id={routes.tours.id}></Tours>
        <CreateTour id={routes.createTour.id}></CreateTour>
        <Reviews id={routes.reviews.id}></Reviews>
        <Photos></Photos>
        <History id={routes.history.id}></History>
        <WithUs></WithUs>
        <Footer></Footer>
    </>
}