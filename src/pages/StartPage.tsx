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
      <ProductCard
      // image={Product.image}
      // title={Product.title}
      // brand={Product.brand}
      // price={Product.price}
      />
    </div>
  );
}

export default StartPage;
