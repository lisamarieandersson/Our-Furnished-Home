import React, { createContext, useContext } from "react";
import { Product, products as mockedProducts } from "../../data";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

// Define Props interface to enforce the type of the `children` prop
interface Props {
  children: React.ReactNode;
}

type ProductContextType = {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  editProduct: (editedProduct: Product) => void;
  product?: Product;
};

const ProductContext = createContext<ProductContextType>({
  products: [],
  addProduct: () => {},
  removeProduct: () => {},
  editProduct: () => {},
});

// Create a custom hook to easier use the order
export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }: Props) => {
  const [products, setProducts] = useLocalStorageState<Product[]>(
    mockedProducts,
    "products"
  );

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const removeProduct = (product: Product) => {
    setProducts(products.filter((p) => p.id !== product.id));
  };

  const editProduct = (editedProduct: Product) => {
    setProducts(
      products.map((product) =>
        product.id === editedProduct.id ? editedProduct : product
      )
    );
  };
  console.log(products);

  const productContext: ProductContextType = {
    products,
    addProduct,
    removeProduct,
    editProduct,
  };

  return (
    <ProductContext.Provider value={productContext}>
      {children}
    </ProductContext.Provider>
  );
};
