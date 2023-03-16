import React, { createContext, useContext, useState } from "react";
import { CartItem } from "../../data";

// Define Props interface to enforce the type of the `children` prop
interface Props {
  children: React.ReactNode;
}

type ShoppingCart = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
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

// Create a new component that provides the shopping cart context to its child components
export const ShoppingCartProvider = ({ children }: Props) => {
  // Initialize a state variable for the items in the shopping cart
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (itemToAdd: CartItem) => {
    // const item = items.find()
    // 1. kolla om produkten redan finns i kundvagnen, om den finns:
    //  1a. öka antalet, annars
    //  1b. lägg till ett nytt item
    
    console.log("adding product");
    // TODO: implement addItem function
  };

  const removeItem = (id: number) => {
    // TODO: implement removeItem function
  };

  const clearCart = () => {
    // TODO: implement clearCart function
  };

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

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

  // Render the child components wrapped inside the ShoppingCartContext.Provider
  return (
    <ShoppingCartContext.Provider value={shoppingCart}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
