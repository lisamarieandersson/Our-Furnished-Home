import ProductGallery from "../ProductGallery";
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
      <ProductGallery />
    </div>
  );
}

export default StartPage;
