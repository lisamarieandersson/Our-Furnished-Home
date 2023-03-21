import { useTheme } from "@mui/material/styles";
import Footer from "../components/Footer";
import HeaderMain from "../components/HeaderMain";
import OrderConfirmation from "../components/OrderConfirmation";
import ShoppingCartSummary from "../components/ShoppingCartSummary";
import UserInfoOrder from "../components/UserInfoOrder";

function OrderConfirmationPage() {
  const theme = useTheme();
  return (
    <div>
      <HeaderMain />
      <OrderConfirmation />
      <ShoppingCartSummary />
      <UserInfoOrder />
      <Footer />
    </div>
  );
}

export default OrderConfirmationPage;
