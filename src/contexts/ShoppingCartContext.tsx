import React, { createContext, useContext } from "react";
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
  // const [items, setItems] = useState<CartItem[]>([]);
  const [items, setItems] = useLocalStorageState<CartItem[]>([], "cart");
  console.log("cart");

  const addItem = (itemToAdd: CartItem) => {
    const existingItem = items.find((item) => item.id === itemToAdd.id); // Check if the item to be added already exists in the cart by finding an item with the same id
    console.log("Adding product:", itemToAdd);

    if (existingItem) {
      // If the item already exists in the cart, increase the quantity of that item
      const updatedItems = items.map((item) => {
        // Create a new array of items by iterating over the existing items in the cart
        if (item.id === existingItem.id) {
          // If the id of the current item matches the id of the existing item, update the quantity
          return { ...item, quantity: item.quantity + itemToAdd.quantity };
        } else {
          return item; // Otherwise, return the current item as-is
        }
      });
      setItems(updatedItems); // Update the items in the cart with the updatedItems array
    } else {
      // If the item does not exist in the cart, add it as a new item
      setItems([...items, itemToAdd]); // Create a new array of items that includes the existing items and the new item, and update the items in the cart with the new array
    }

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

  // Render the child components wrapped inside the ShoppingCartContext.Provider
  return (
    <ShoppingCartContext.Provider value={shoppingCart}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
