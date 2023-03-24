import React, { createContext, useContext } from "react";
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
  product?: Product;
};

const AdminProductContext = createContext<ProductContextType>({
  items: [],
  addProduct: () => {},
  removeProduct: () => {},
  editProduct: () => {},
});

// Create a custom hook to easier use the order
export const useProduct = () => useContext(AdminProductContext);

export const ProductProvider = ({ children }: Props) => {
  const [items, setProducts] = useLocalStorageState<Product[]>([], "product");
  // const [product, setProduct] = useState<Product>();

  const addProduct = (productValues: ProductValues) => {
    const products = items;
    const newProduct: Product = {
      ...productValues,
    };

    setProducts([...items, newProduct]);
  };

  const removeProduct = (id: string) => {
    setProducts(items.filter((item) => item.id !== id));
  };

  const editProduct = (id: string, newName: string) => {
    setProducts(
      items.map((item) => (item.id === id ? { ...item, name: newName } : item))
    );
  };

  const productContext: ProductContextType = {
    items,
    addProduct,
    removeProduct,
    editProduct,
  };

  return (
    <AdminProductContext.Provider value={productContext}>
      {children}
    </AdminProductContext.Provider>
  );
};
