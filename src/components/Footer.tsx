import { Box, Divider, Grid, List, ListItem } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import { Container, useTheme } from "@mui/system";

function Footer() {
    const theme = useTheme();
    return (
        <Container maxWidth='xl' sx={{
            height: 'auto',
            marginTop: '6rem',
        }}>
            <Divider sx={{
                marginBottom: '1.5rem',
                backgroundColor: theme.palette.text.primary,
            }}></Divider>
            <Grid container spacing={2} justifyContent="center" sx={{
                justifyContent: 'center',
            }}>
                <Grid item xs={12} sm={4} md={4} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                    <List sx={{ '& span': { textAlign: 'center'} }}>
                        <ListItem disablePadding >
                            <ListItemText>ABOUT US</ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText>Our Story</ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText>Sustainability</ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText>Work with us</ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText>Press</ListItemText>
                        </ListItem>
                    </List>                    
                </Grid>
                <Grid item xs={12} sm ={4} md={4} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemText sx={{textAlign: 'center',}}>CUSTOMER SERVICE</ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText sx={{textAlign: 'center',}}>Delivery info</ListItemText>
                        </ListItem> 
                        <ListItem disablePadding>
                            <ListItemText sx={{textAlign: 'center',}}>Returns & Refunds</ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                                <ListItemText sx={{textAlign: 'center',}}>Terms & Conditions</ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                                <ListItemText sx={{textAlign: 'center',}}>FAQs</ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText sx={{textAlign: 'center',}}>Cookie Settings</ListItemText>
                        </ListItem> 
                    </List>
                </Grid>
                <Grid item xs={12} sm ={4} md={4} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemText sx={{textAlign: 'center',}}>CONTACT</ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText sx={{textAlign: 'center',}}>Contact us</ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText sx={{textAlign: 'center',}}>Our stores</ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText sx={{textAlign: 'center',}}>Affiliates</ListItemText>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
            <Container sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '2rem',
            }}>
                <Box sx={{
                    borderRadius: '100rem',
                    width: '4rem',
                    height: '4rem',
                    background: (theme) => theme.palette.primary.main,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0.5rem',
                    '& img': {
                        width: '2rem'
                    }
                }}>
                    <img src="/facebook.png" alt="" />
                </Box>
                <Box sx={{
                    borderRadius: '100rem',
                    width: '4rem',
                    height: '4rem',
                    background: (theme) => theme.palette.primary.main,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0.5rem',
                    '& img': {
                        width: '2rem'
                    }
                }}>
                    <img src="/contact.png" alt="" />
                </Box>
                <Box sx={{
                    borderRadius: '100rem',
                    width: '4rem',
                    height: '4rem',
                    background: (theme) => theme.palette.primary.main,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0.5rem',
                    '& img': {
                        width: '2rem'
                    }
                }}>
                    <img src="/instagram.png" alt="" />
                </Box>
            </Container>
            <Container sx={{
                display: 'flex',
                justifyContent: 'center',
                fontFamily: 'Josefin Sans'
            }}>
                <p>© 2023 The Furnished Home</p>
            </Container>
        </Container>
    );
}

export default Footer;