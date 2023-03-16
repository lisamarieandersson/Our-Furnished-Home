import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";

function ShoppingCartSummary() {
  const { totalItems, totalPrice } = useContext(ShoppingCartContext);

  return (
    <div>
      <p>Total items: {totalItems}</p>
      <p>Total price: {totalPrice}</p>
    </div>
  );
}

export default ShoppingCartSummary;