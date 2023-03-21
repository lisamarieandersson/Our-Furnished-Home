import { Button, Typography, useMediaQuery } from "@mui/material";
import { Container, useTheme } from "@mui/system";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../contexts/ShoppingCartContext";

function UserInfoOrder() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { items } = useShoppingCart();

  return (
    <Container
      maxWidth={isSmallScreen ? "sm" : "md"}
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}>
      <Typography variant={isSmallScreen ? "h6" : "h5"}>
        Thank you for your order!
      </Typography>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "1rem",
        }}>
        <Typography textAlign={"center"}>
          An order confirmation has been sent to:
        </Typography>
        <Typography>
          {/*order.email typ eller nått*/}johan.johansson@medieinstitutet.se
        </Typography>
      </Container>
      <Typography variant={isSmallScreen ? "h6" : "h5"} marginTop={"2rem"}>
        Your order details:
      </Typography>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: isSmallScreen ? "0.2rem" : "1rem",
          marginBottom: isSmallScreen ? "1rem" : "3rem",
        }}>
        <Typography>{/*order.namn*/}Johan Johansson</Typography>
        <Typography>{/*order.address*/}VägenVägen 12</Typography>
        <Typography>
          {/*order.postalcode*/}12345 {/*order.city*/} Göteborg
        </Typography>
        <Typography>{/*order.phonenumber*/}072 1234567</Typography>
      </Container>
      <Button component={Link} to={"/"} variant="contained">
        Continue to shop
      </Button>
    </Container>
  );
}

export default UserInfoOrder;
