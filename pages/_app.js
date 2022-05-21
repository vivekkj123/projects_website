import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import "swiper/css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
