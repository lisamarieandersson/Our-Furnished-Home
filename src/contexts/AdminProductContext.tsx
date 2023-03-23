import React, { createContext, useContext, useState } from "react";
import { Product } from "../../data";
import { ProductValues } from "../components/AddProductForm";

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

type ProductContextType = {
  items: Product[];
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
  editItem: (id: string, newName: string) => void;
};

const ProductContext = createContext<ProductContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  editItem: () => {},
});

// Create a custom hook to easier use the order
export const useProductContext = () => useContext(ProductContext);

interface Props {
  children: React.ReactNode;
}

export const ProductProvider = ({ children }: Props) => {
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

  const createProduct = (productValues: ProductValues) => {};

  const contextValue = {
    items,
    addItem,
    removeItem,
    editItem,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
