import React, { createContext, useContext, useState } from "react";
import { Product } from "../../data";

// Define Props interface to enforce the type of the `children` prop
interface Props {
  children: React.ReactNode;
}

interface Item /**Borde kanske ändra, men till vad?? */ {
  id: string;
  title: string;
  price: number;
  brand: string;
  image: string;
  description: string;
  //   products: CartItem[];
}

type ContextType = {
  items: Product[];
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
  editItem: (id: string, newName: string) => void;
};

const initialContext: ContextType = {
  items: [],
  addItem: () => {},
  removeItem: () => {},
  editItem: () => {},
};

export const MyContext = createContext<ContextType>(initialContext);

export const useMyContext = () => useContext(MyContext);

interface Props {
  children: React.ReactNode;
}

export const MyProvider = ({ children }: Props) => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (item: Item) => {
    setItems([...items, item]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const editItem = (id: string, newName: string) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, name: newName } : item))
    );
  };

  const contextValue = {
    items,
    addItem,
    removeItem,
    editItem,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
