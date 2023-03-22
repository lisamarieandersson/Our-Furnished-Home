import Footer from "../components/Footer";
import HeaderMain from "../components/HeaderMain";
import ProductGallery from "../components/ProductGallery";
import Toast from "../components/Toast";

function StartPage() {
  return (
    <div>
      <HeaderMain />
      <main>
        <ProductGallery />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default StartPage;
