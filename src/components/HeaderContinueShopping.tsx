import { AppBar, Container, Link, Typography, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const StyledLink = (props: any) => (
    <Link component={RouterLink} underline="none" color="inherit" {...props} />
  );

function HeaderContinueShopping() {
    const theme = useTheme();
    return(
        <AppBar
            elevation={0}
            position="static"
            >
            <Container maxWidth="xl" sx={{
                padding: '0px !important',
                margin: '0 2rem',
                background: (theme) => theme.palette.primary.main,
            }}>
                <StyledLink 
                to={`/`}>
                    <Typography variant="h6" margin={'1rem 0'}>Continue shopping</Typography>
                </StyledLink>
            </Container>
        </AppBar>
    )
}

export default HeaderContinueShopping;