import DeliveryForm from "../components/DeliveryForm";
import Footer from "../components/Footer";
import HeaderContinueShopping from "../components/HeaderContinueShopping";
import ShoppingBagCard from "../components/ShoppingBagCard";
import ShoppingCartSummary from "../components/ShoppingCartSummary";

function CheckoutPage() {
  return (
    <div>
      <HeaderContinueShopping />
      <ShoppingBagCard />
      <ShoppingCartSummary />
      <DeliveryForm />
      <Footer />
    </div>
  );
}

export default CheckoutPage;
