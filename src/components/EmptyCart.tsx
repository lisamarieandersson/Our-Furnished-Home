import { Button, Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link } from 'react-router-dom';

function EmptyCart() { 
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return( 
        <Container sx={{ 
            display: 'flex',
            flexDirection: 'column', 
            alignItems: 'center', 
            marginTop: '4rem', 
        }}> 
        <img src="/emptycart.svg" alt="empty cart" width={'50%'}/> 
            <Container sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
            }}> 
                <Typography variant={isSmallScreen ? 'h6' : 'h5'}>OOPS...</Typography> 
                <Typography>Your shopping bag is empty!</Typography> 
                <Button component={Link} to="/" variant="contained" sx={{ boxShadow: 'none', marginTop: '1rem', }}>
                    Continue shopping
                </Button> 
            </Container> 
        </Container> 
    ) 
} 

export default EmptyCart;