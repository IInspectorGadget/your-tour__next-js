import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>YourTour</title>
        <link rel="icon" href="assets/images/logo.svg" type="image/svg+xml"/>
        <meta name="description" content="Путешествия - это не только открытие новых мест, но и создание уникального опыта. Наши туры предлагают разнообразные варианты для каждого типа путешественника. Выбери свой идеальный отдых: Популярные, Авторские, Походы, Сплавы, Велопрогулки. Цены начиная от 80 000 рублей. Мы стремимся к постоянному росту и удовлетворению твоих потребностей. Присоединяйся к нам и создай свою историю путешествия!"/>
        <meta name="keywords" content="туры, путешествия, отдых, популярные туры, авторские туры, природа, сплавы, горы, велопрогулки, цены на туры"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
