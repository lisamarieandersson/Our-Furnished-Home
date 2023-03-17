import { AppBar, Container, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const StyledLink = (props: any) => (
    <Link component={RouterLink} underline="none" color="inherit" {...props} />
  );

function HeaderContinueShopping() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return(
        <AppBar
            elevation={0}
            position="static"
            >
            <Container maxWidth="xl" sx={{
                padding: '0px !important',
                background: (theme) => theme.palette.primary.main,
            }}>
                <StyledLink 
                to={`/`}>
                    <Typography variant={isSmallScreen ? 'body1' : 'h6'} margin={'1rem 2rem'}>Continue shopping</Typography>
                </StyledLink>
            </Container>
        </AppBar>
    )
}

export default HeaderContinueShopping;