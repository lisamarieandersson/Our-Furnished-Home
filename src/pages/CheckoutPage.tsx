import ShoppingBagCard from "../components/ShoppingBagCard";
import ShoppingCartSummary from "../components/ShoppingCartSummary";

function CheckoutPage() {
  return (
    <div>
      <h1>CheckoutPage</h1>
      <ShoppingBagCard></ShoppingBagCard>
      <ShoppingCartSummary />
    </div>
  );
}

export default CheckoutPage;
