import { Outlet } from "react-router-dom";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import Toast from "./Toast";

function ToastOutlet() {
  const { lastAddedItem, clearLastAddedItem } = useShoppingCart();

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    clearLastAddedItem();
  };

  return (
    <>
      <Outlet />
      <Toast
        open={Boolean(lastAddedItem)}
        onClose={handleClose}
        lastAddedItem={lastAddedItem}
        clearLastAddedItem={clearLastAddedItem}
      />
    </>
  );
}

export default ToastOutlet;
