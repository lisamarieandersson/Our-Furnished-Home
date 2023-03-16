import { Button, Container, Typography } from "@mui/material";

function PageNotFound() {
    return(
        <Container sx={{ 
            display: 'flex',
            flexDirection: 'column', 
            alignItems: 'center', 
            marginTop: '4rem', 
        }}> 
        <img src="/pagenotfound.svg" alt="page not found" width={'50%'}/> 
            <Container sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
            }}> 
                <Typography variant="h5">OOPS...</Typography> 
                <Typography>The page your looking for doesn't exist</Typography> 
                <Button variant="contained" sx={{ boxShadow: 'none', marginTop: '1rem', }}>
                    GO BACK
                </Button> 
            </Container> 
        </Container> 
    )
}

export default PageNotFound;