import Hero from "./Hero/Hero"
import History from "./History/History"
import CreateTour from "./CreateTour/CreateTour"
import Photos from "./Photos/Photos"
import Reviews from "./Reviews/Reviews"
import Tours from "./Tours/Tours"
import Header from "@/components/commons/Header/Header"
import "./HomePage.module.scss"

export default function HomePage(){
    return <>
        <Header></Header>
        <Hero></Hero>
        <Tours></Tours>
        <CreateTour></CreateTour>
        <Reviews></Reviews>
        <Photos></Photos>
        <History></History>
    </>
}