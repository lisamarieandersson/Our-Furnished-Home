import {
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useShoppingCart } from "../contexts/ShoppingCartContext";

function PurchaseConfirmation() {
  const { totalPrice } = useShoppingCart();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      maxWidth={isSmallScreen ? "sm" : "md"}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}>
      <Typography variant={isSmallScreen ? "body1" : "h6"}>
        TOTAL: {totalPrice} SEK
      </Typography>
      <Button variant="contained" type="submit">
        <Typography variant={isSmallScreen ? "body2" : "body1"}>
          Confirm purchase
        </Typography>
      </Button>
    </Container>
  );
}

export default PurchaseConfirmation;
