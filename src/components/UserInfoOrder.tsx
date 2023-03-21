import { Button, Typography, useMediaQuery } from "@mui/material";
import { Container, useTheme } from "@mui/system";
import { Link } from 'react-router-dom';
import { useShoppingCart } from "../contexts/ShoppingCartContext";

function UserInfoOrder() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const { items } = useShoppingCart();
    
    return (
        <Container maxWidth= {isSmallScreen ? 'sm' : 'md'} sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <Typography variant="h5">Thank you for your order!</Typography>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '1rem',
            }}>
                <Typography>An order confirmation has been sent to:</Typography>
                <Typography>{/*ordercontext.email typ eller nått*/}johan.johansson@medieinstitutet.se</Typography>
            </Container>
            <Typography variant="h5" marginTop={'2rem'}>Your order details:</Typography>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '1rem',
                marginBottom: '3rem',
            }}>
                <Typography>{/*Ordercontext.namn*/}Johan Johansson</Typography>
                <Typography>{/*Ordercontext.address*/}VägenVägen 12</Typography>
                <Typography>{/*Ordercontext.postalcode*/}12345 {/*Ordercontext.city*/} Göteborg</Typography>
                <Typography>{/*Ordercontext.phonenumber*/}072 1234567</Typography>
            </Container>
            <Button component={Link} to={'/'} variant="contained">Continue to shop</Button>
        </Container>
    )
}

export default UserInfoOrder;