import React, { createContext, useContext, useState } from "react";
import { CartItem } from "../../data";
import { DeliveryValues } from "../components/DeliveryForm";
import { useShoppingCart } from "./ShoppingCartContext";

// Define Props interface to enforce the type of the `children` prop
interface Props {
  children: React.ReactNode;
}

interface Order {
  orderNumber: string;
  products: CartItem[];
  email: string;
  name: string;
  address: string;
  city: string;
  postalcode: string;
  phonenumber: string;
}

type OrderContextType = {
  order?: Order;
  setOrder: (order: Order) => void;
  createOrder: (deliveryValues: DeliveryValues) => void;
};

// Create a new context object with an initial value of null for the order
const OrderContext = createContext<OrderContextType>({
  setOrder: () => {},
  createOrder: () => {},
});

// Create a custom hook to easier use the order
export const useOrder = () => useContext(OrderContext);

// Create a new component that provides the order context to its child components
export const OrderProvider = ({ children }: Props) => {
  const [order, setOrder] = useState<Order>();
  const { items, totalPrice } = useShoppingCart();

  // Define a function to create the order object based on the current shopping cart state and delivery address
  const createOrder = (deliveryValues: DeliveryValues) => {
    const orderNumber = `#${Math.floor(Math.random() * 100000)}`; // Generate a random order number
    const products = items; // Get the list of products from the shopping cart
    const newOrder: Order = {
      orderNumber,
      products,
      ...deliveryValues,
    }; // Create the order object with the generated order number, products, and delivery address

    setOrder(newOrder); // Update the order state with the new order
  };

  // Create an object with all necessary properties and methods for the OrderContext
  // console.log(order);
  const orderContext: OrderContextType = {
    order,
    setOrder,
    createOrder,
  };

  // Return the OrderContext.Provider component with the value prop set to the orderContext object
  return (
    <OrderContext.Provider value={orderContext}>
      {children}
    </OrderContext.Provider>
  );
};
