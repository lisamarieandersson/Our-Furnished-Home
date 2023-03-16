import { useShoppingCart } from "../contexts/ShoppingCartContext";

function ShoppingCartSummary() {
  const { totalItems, totalPrice } = useShoppingCart();

  return (
    <div>
      <p>Total items: {totalItems}</p>
      <p>Total price: {totalPrice}</p>
    </div>
  );
}

export default ShoppingCartSummary;
