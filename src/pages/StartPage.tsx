import Footer from "../components/Footer";

import ProductCard from "../ProductCard";
import { theme } from "../theme";

function StartPage() {
  return (
    <div>
      {/* <AppHeader />
            <main>
                <Gallery>
            </main>
            <Footer /> */}
      <h1 style={{ fontFamily: theme.typography.h1.fontFamily }}>Startpage</h1>
      <ProductCard />
      <Footer />
    </div>
  );
}

export default StartPage;
