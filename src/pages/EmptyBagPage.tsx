import EmptyCart from "../components/EmptyCart";
import Footer from "../components/Footer";
import HeaderContinueShopping from "../components/HeaderContinueShopping";

function EmptyBagPage() {
  return (
    <div>
      <HeaderContinueShopping />
      <main>
        <EmptyCart />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default EmptyBagPage;
