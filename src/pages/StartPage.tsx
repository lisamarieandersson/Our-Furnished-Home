import Footer from "../components/Footer";
import HeaderMain from "../components/HeaderMain";
import ProductGallery from "../components/ProductGallery";

function StartPage() {
  return (
    <div>
      <HeaderMain />
      <main>
        <ProductGallery />
      </main>
      <Footer />
    </div>
  );
}

export default StartPage;
