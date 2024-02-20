import "@/styles/main.scss";
import { Roboto } from "next/font/google";
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: "normal",
  subsets: ["latin"],
});
export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />;
    </main>
  )
}
