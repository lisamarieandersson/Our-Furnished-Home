import React, { createContext, useContext, useState } from "react";
import { CartItem } from "../../data";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

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
  updateItemQuantity: (id: string, quantity: number) => void;
  // Toast
  lastAddedItem?: CartItem;
  clearLastAddedItem: () => void;
};

// Create a new context object with an empty shopping cart object as its initial value
const ShoppingCartContext = createContext<ShoppingCart>(null as any);

// Create a custom hook to easier use the shopping cart
export const useShoppingCart = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({ children }: Props) => {
  const [items, setItems] = useLocalStorageState<CartItem[]>([], "cart");
  const [lastAddedItem, setLastAddedItem] = useState<CartItem>();

  const updateItemQuantity = (id: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      setItems((prevItems) =>
        prevItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
      );
    } else if (newQuantity === 0) {
      removeItem(id);
    }
  };

  const addItem = (itemToAdd: CartItem, quantity: number = 1) => {
    const existingItem = items.find((item) => item.id === itemToAdd.id); // Check if the item to be added already exists in the cart by finding an item with the same id
    console.log("Adding product:", itemToAdd);

    if (existingItem) {
      const updatedItems = items.map((item) => {
        if (item.id === existingItem.id) {
          // If the id of the current item matches the id of the existing item, update the quantity
          return { ...item, quantity: item.quantity + quantity };
        } else {
          return item;
        }
      });
      setItems(updatedItems);
    } else {
      // If the item does not exist in the cart, add it as a new item
      setItems([...items, { ...itemToAdd, quantity }]); // Create a new array of items that includes the existing items and the new item, and update the items in the cart with the new array
    }
    setLastAddedItem(itemToAdd);

    console.log("adding product");
  };

  const clearLastAddedItem = () => {
    setLastAddedItem(undefined);
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
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
    updateItemQuantity,
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
