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

export default function HomePage(){
    return <>
        <Header></Header>
        <Hero></Hero>
        <Tours></Tours>
        <CreateTour></CreateTour>
        <Reviews></Reviews>
        <Photos></Photos>
        <History></History>
        <WithUs></WithUs>
        <Footer></Footer>
    </>
}