import { CartItem } from "../../data";

export function useTotal(items: CartItem[]) {
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  
  return { totalItems, totalPrice }
}