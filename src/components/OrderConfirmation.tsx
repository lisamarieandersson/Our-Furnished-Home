import { Box, Card, CardContent, CardMedia, Container, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useShoppingCart } from "../contexts/ShoppingCartContext";

function OrderConfirmation() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { items } = useShoppingCart();
  
  return (
    <Container maxWidth= {isSmallScreen ? 'sm' : 'md'}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "1rem",
        }}
      >
        <Typography variant="h6">Your order</Typography>
        <Typography variant="h6">#9574729</Typography>
      </Box>
      <Divider sx={{backgroundColor: theme.palette.primary.main, marginBottom: '1rem',}}></Divider>
      {items.map((CartItem) => (
        <Card 
            key = {CartItem.id}
            sx={{
                display: 'flex',
                margin: '1rem',
                boxShadow: 'none',
                position: 'relative',
            }}>
            <CardMedia component='img' image={CartItem.image} sx={{
                width: isSmallScreen ? '6rem' : '10rem',
            }}/>
            <Container sx={{
                padding: '0px !important',
                display: 'flex',
                flexDirection: 'column',
            }}>
              <Container sx={{
                padding: '0px !important',
                marginTop: isSmallScreen ? '0.8rem': '1rem',
              }}>
                <CardContent sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0px !important',
                  marginLeft: '1rem',
                  marginTop: isSmallScreen ? '0.2rem': '2rem',
                }}>
                  <Typography variant= {isSmallScreen ? 'body1': 'h6'}>
                    {CartItem.title}
                  </Typography>
                  <Typography variant= {isSmallScreen ? 'body2': 'body1'}>
                    {CartItem.price} SEK
                  </Typography>
                </CardContent>
              </Container>
                <CardContent sx={{
                  padding: '0px !important',
                  marginLeft: '1rem'
                }}>
                  <Typography fontSize={'0.8rem'}>
                    Quantity: {CartItem.quantity}
                  </Typography>
                </CardContent>
            </Container>
        </Card>))}
        <Divider sx={{backgroundColor: theme.palette.primary.main, marginBottom: '1rem',}}></Divider>
    </Container>
  );
}

export default OrderConfirmation;
