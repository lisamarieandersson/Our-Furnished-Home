import React, { createContext, useContext, useState } from "react";
import { CartItem } from "../../data";
import Toast from "../components/Toast";

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
};

// Create a new context object with an empty shopping cart object as its initial value
const ShoppingCartContext = createContext<ShoppingCart>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  totalItems: 0,
  totalPrice: 0,
});

// Create a custom hook to easier use the shopping cart
export const useShoppingCart = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({ children }: Props) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [showToast, setShowToast] = useState<boolean>(false);

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
    setShowToast(true);
    
    console.log("adding product");
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
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setShowToast(false);
  };

  // Render the child components wrapped inside the ShoppingCartContext.Provider
  return (
    <ShoppingCartContext.Provider value={shoppingCart}>
      {children}
      <Toast open={showToast} onClose={handleClose}/>
    </ShoppingCartContext.Provider>
  );
};