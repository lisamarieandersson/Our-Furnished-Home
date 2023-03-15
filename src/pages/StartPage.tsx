import { theme } from "../theme";
import HeaderMain from "../components/HeaderMain";
import ProductGallery from "../ProductGallery";
import Footer from "../components/Footer";

function StartPage() {
  return (
    <div>
      <HeaderMain />
      <ProductGallery />
      <Footer />
    </div>
  );
}

export default StartPage;
