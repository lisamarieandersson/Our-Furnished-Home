import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function OrderConfirmationPage() {
  const theme = useTheme();
  return (
    <div>
      <h1 style={{ fontFamily: theme.typography.h1.fontFamily }}>
        Order Confirmation Page
      </h1>
      <h2 style={{ fontFamily: theme.typography.caption.fontFamily }}>
        Order Confirmation Page
      </h2>
      <Button variant="contained">ADD TO BAG</Button>
    </div>
  );
}

export default OrderConfirmationPage;
