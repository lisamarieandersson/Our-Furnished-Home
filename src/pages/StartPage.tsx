import HeaderMain from "../components/HeaderMain";
import ProductCard from "../ProductCard";
import { theme } from "../theme";

function StartPage() {
  return (
    <div>

      <HeaderMain />
      {/* <AppHeader />
            <main>
                <Gallery>
            </main>
            <Footer /> */}
      <h1 style={{ fontFamily: theme.typography.h1.fontFamily }}>Startpage</h1>
      <ProductCard />
    </div>
  );
}

export default StartPage;