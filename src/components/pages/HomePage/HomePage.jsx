import Header from "@/components/commons/Header";
import Hero from "./Hero";
import Tours from "./Tours";
import CreateTour from "./CreateTour";
import Reviews from "./Reviews";
import Photos from "./Photos";
import History from "./History";
import WithUs from "./WithUs";
import Footer from "@/components/commons/Footer";

import s from "./HomePage.module.scss";

import { routes } from "@/data";

export default function HomePage() {
  return (
    <>
      <Header routes={routes} />
      <Hero />
      <Tours id={routes.tours.id} />
      <CreateTour id={routes.createTour.id} />
      <Reviews id={routes.reviews.id} />
      <Photos />
      <History id={routes.history.id} />
      <WithUs />
      <Footer />
    </>
  );
}
