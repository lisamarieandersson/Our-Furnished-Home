import DeliveryForm from "../components/DeliveryForm";
import Footer from "../components/Footer";
import HeaderContinueShopping from "../components/HeaderContinueShopping";
import PurchaseConfirmation from "../components/PurchaseConfirmation";
import ShoppingBagCard from "../components/ShoppingBagCard";
import ShoppingCartSummary from "../components/ShoppingCartSummary";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import EmptyBagPage from "./EmptyBagPage";

function CheckoutPage() {
  const { totalItems } = useShoppingCart();

  if (totalItems === 0) {
    return (
      <div>
        <EmptyBagPage />
      </div>
    )
  } else {
    return (
      <div>
      <HeaderContinueShopping />
      <ShoppingBagCard />
      <ShoppingCartSummary />
      <DeliveryForm />
      <PurchaseConfirmation />
      <Footer />
      </div>
    )
  }
}

export default CheckoutPage;
