import { Box, Divider, Grid, List, ListItem, ListItemButton } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import { Container } from "@mui/system";

function Footer() {
    return (
        <Container sx={{
            maxWidth: '80%',
            height: 'auto',
            background: 'lightpink',
        }}>
            <Divider sx={{
                backgroundcolor: 'black',
                width: '1px',
            }}/>
            <Grid container spacing={2} justifyContent="center" sx={{
                justifyContent: 'center',
            }}>
                <Grid xs={12} sm={4} md={4} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                    <List sx={{ '& span': { textAlign: 'center'} }}>
                        <ListItem disablePadding >
                            <ListItemText>ABOUT US</ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton disableGutters>
                                <ListItemText>Our Story</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton disableGutters>
                                <ListItemText>Sustainability</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton disableGutters>
                                <ListItemText>Work with us</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton disableGutters>
                                <ListItemText>Press</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>                    
                </Grid>
                <Grid xs={12} sm ={4} md={4} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemText sx={{textAlign: 'center',}}>CUSTOMER SERVICE</ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton disableGutters>
                                <ListItemText sx={{textAlign: 'center',}}>Delivery info</ListItemText>
                            </ListItemButton>
                        </ListItem> 
                        <ListItem disablePadding>
                            <ListItemButton disableGutters>
                                <ListItemText sx={{textAlign: 'center',}}>Returns & Refunds</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton disableGutters>
                                <ListItemText sx={{textAlign: 'center',}}>Terms & Conditions</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton disableGutters>
                                <ListItemText sx={{textAlign: 'center',}}>FAQs</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton disableGutters sx={{height: 'auto',}}>
                                <ListItemText sx={{textAlign: 'center',}}>Cookie Settings</ListItemText>
                            </ListItemButton>
                        </ListItem> 
                    </List>
                </Grid>
                <Grid xs={12} sm ={4} md={4} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemText sx={{textAlign: 'center',}}>CONTACT</ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton disableGutters>
                                <ListItemText sx={{textAlign: 'center',}}>Contact us</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton disableGutters>
                                <ListItemText sx={{textAlign: 'center',}}>Our stores</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton disableGutters>
                                <ListItemText sx={{textAlign: 'center',}}>Affiliates</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
            <Grid sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Grid item>
                    <Box sx={{
                        borderRadius: '100rem',
                        width: '4rem',
                        height: '4rem',
                        background: 'green',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0.5rem',
                    }}>
                        <img src="/public/vite.svg" alt="" />
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={{
                        borderRadius: '100rem',
                        width: '4rem',
                        height: '4rem',
                        background: 'green',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0.5rem',
                    }}>
                        <img src="/public/vite.svg" alt="" />
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={{
                        borderRadius: '100rem',
                        width: '4rem',
                        height: '4rem',
                        background: 'green',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0.5rem',
                    }}>
                        <img src="/public/vite.svg" alt="" />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Footer;