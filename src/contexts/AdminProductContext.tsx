import React, { createContext, useContext, useState } from "react";
import { Product as mockedProducts } from "../../data";
import { ProductValues } from "../components/AddProductForm";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

// Define Props interface to enforce the type of the `children` prop
interface Props {
  children: React.ReactNode;
}

interface Product {
  id: string;
  title: string;
  price: number;
  brand: string;
  image: string;
  description: string;
  //   products: CartProduct[];
}

type ProductContextType = {
  items: mockedProducts[];
  addProduct: (product: Product) => void;
  removeProduct: (id: string) => void;
  editProduct: (id: string, newName: string) => void;
  createProduct: (productValues: ProductValues) => void;
  product?: Product;
};

const ProductContext = createContext<ProductContextType>({
  items: [],
  addProduct: () => {},
  removeProduct: () => {},
  editProduct: () => {},
  createProduct: () => {},
});

// Create a custom hook to easier use the order
export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }: Props) => {
  const [items, setProducts] = useLocalStorageState<Product[]>([], "product");
  const [product, setProduct] = useState<Product>();

  const addProduct = (item: Product) => {
    setProducts([...items, item]);
  };

  const removeProduct = (id: string) => {
    setProducts(items.filter((item) => item.id !== id));
  };

  const editProduct = (id: string, newName: string) => {
    setProducts(
      items.map((item) => (item.id === id ? { ...item, name: newName } : item))
    );
  };

  const createProduct = (productValues: ProductValues) => {
    const products = items;
    const newProduct: Product = {
      ...productValues,
    };

    setProduct(newProduct);
  };

  const productContext: ProductContextType = {
    items,
    addProduct,
    removeProduct,
    editProduct,
    createProduct,
  };

  return (
    <ProductContext.Provider value={productContext}>
      {children}
    </ProductContext.Provider>
  );
};
