import HeaderContinueShopping from "../components/HeaderContinueShopping";
import ShoppingBagCard from "../components/ShoppingBagCard";
import ShoppingCartSummary from "../components/ShoppingCartSummary";
import DeliveryForm from "../components/DeliveryForm";

function CheckoutPage() {
  return (
    <div>
      <HeaderContinueShopping />
      <ShoppingBagCard />
      <ShoppingCartSummary />
      <DeliveryForm />
    </div>
  );
}

export default CheckoutPage;
