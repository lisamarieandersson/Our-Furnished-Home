import HeaderContinueShopping from "../components/HeaderContinueShopping";
import ShoppingBagCard from "../components/ShoppingBagCard";
import ShoppingCartSummary from "../components/ShoppingCartSummary";

function CheckoutPage() {
  return (
    <div>
      <HeaderContinueShopping/>
      <ShoppingBagCard/>
      <ShoppingCartSummary />
    </div>
  );
}

export default CheckoutPage;
