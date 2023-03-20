import { Box, Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useShoppingCart } from "../contexts/ShoppingCartContext";

function ShoppingCartSummary() {
  const { totalItems, totalPrice } = useShoppingCart();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth= {isSmallScreen ? 'sm' : 'md'} >
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 1rem'
      }}>
        <Typography>Total items: </Typography>
        <Typography>{totalItems}</Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 1rem'
      }}>
        <Typography>Total price: </Typography>
        <Typography>{totalPrice} SEK</Typography>
      </Box>
      
    </Container>
  );
}

export default ShoppingCartSummary;
