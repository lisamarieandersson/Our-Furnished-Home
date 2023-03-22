import {
  Box,
  Container,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useShoppingCart } from "../contexts/ShoppingCartContext";

function ShoppingCartSummary() {
  const { totalItems, totalPrice } = useShoppingCart();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth={isSmallScreen ? "sm" : "md"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 1rem",
        }}>
        <Typography sx={{ marginBottom: "0.5rem" }}>Total items: </Typography>
        <Typography>{totalItems}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 1rem",
        }}>
        <Typography>Total price: </Typography>
        <Typography data-cy="total-price">{totalPrice} SEK</Typography>
      </Box>
      <Divider
        sx={{
          backgroundColor: theme.palette.primary.main,
          marginBottom: "2rem",
          marginTop: "1rem",
        }}></Divider>
    </Container>
  );
}

export default ShoppingCartSummary;
