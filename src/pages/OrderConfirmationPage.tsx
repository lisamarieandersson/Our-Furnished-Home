import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Footer from "../components/Footer";
import HeaderMain from "../components/HeaderMain";

function OrderConfirmationPage() {
  const theme = useTheme();
  return (
    <div>
      <HeaderMain />
      
      <Footer />
    </div>
  );
}

export default OrderConfirmationPage;
