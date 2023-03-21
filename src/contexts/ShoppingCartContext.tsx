import React, { createContext, useContext, useState } from "react";
import { CartItem } from "../../data";

// Define Props interface to enforce the type of the `children` prop
interface Props {
  children: React.ReactNode;
}

type ShoppingCart = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  // Toast
  lastAddedItem?: CartItem;
  clearLastAddedItem: () => void;
};

// Create a new context object with an empty shopping cart object as its initial value
const ShoppingCartContext = createContext<ShoppingCart>(null as any);

// Create a custom hook to easier use the shopping cart
export const useShoppingCart = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({ children }: Props) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [lastAddedItem, setLastAddedItem] = useState<CartItem>();

  const addItem = (itemToAdd: CartItem) => {
    const existingItem = items.find((item) => item.id === itemToAdd.id);

    if (existingItem) {
      const updatedItems = items.map((item) => {
        if (item.id === existingItem.id) {
          return { ...item, quantity: item.quantity + itemToAdd.quantity };
        } else {
          return item;
        }
      });
      setItems(updatedItems);
    } else {
      setItems([...items, itemToAdd]);
    }
    setLastAddedItem(itemToAdd);

    console.log("adding product");
  };

  const clearLastAddedItem = () => {
    setLastAddedItem(undefined);
  };

  const removeItem = (id: string) => {
    // TODO: implement removeItem function
  };

  const clearCart = () => {
    // TODO: implement clearCart function
  };

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  console.log(totalItems);
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Create a shopping cart object with all necessary properties and methods
  const shoppingCart: ShoppingCart = {
    items,
    addItem,
    removeItem,
    clearCart,
    totalItems,
    totalPrice,
    lastAddedItem,
    clearLastAddedItem,
  };
  // Render the child components wrapped inside the ShoppingCartContext.Provider
  return (
    <ShoppingCartContext.Provider value={shoppingCart}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
