import { useTheme } from "@mui/material/styles";
import Footer from "../components/Footer";
import HeaderMain from "../components/HeaderMain";
import OrderConfirmation from "../components/OrderConfirmation";

function OrderConfirmationPage() {
  const theme = useTheme();
  return (
    <div>
      <HeaderMain />
      <OrderConfirmation />
      <Footer />
    </div>
  );
}

export default OrderConfirmationPage;
