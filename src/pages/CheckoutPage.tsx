import DeliveryForm from "../components/DeliveryForm";
import Footer from "../components/Footer";
import HeaderContinueShopping from "../components/HeaderContinueShopping";
import PurchaseConfirmation from "../components/PurchaseConfirmation";
import ShoppingBagCard from "../components/ShoppingBagCard";
import ShoppingCartSummary from "../components/ShoppingCartSummary";

function CheckoutPage() {
  return (
    <div>
      <HeaderContinueShopping />
      <ShoppingBagCard />
      <ShoppingCartSummary />
      <DeliveryForm />
      <PurchaseConfirmation />
      <Footer />
    </div>
  );
}

export default CheckoutPage;
