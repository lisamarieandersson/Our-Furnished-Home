import { Button, Container, Typography } from "@mui/material";

function EmptyCart() { 
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
                <Typography variant="h5">OOPS...</Typography> 
                <Typography>Your shopping bag is empty!</Typography> 
                <Button variant="contained" sx={{ boxShadow: 'none', marginTop: '1rem', }}>
                    GO BACK
                </Button> 
            </Container> 
        </Container> 
    ) 
} 

export default EmptyCart;