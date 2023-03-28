import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  SxProps,
  Theme,
} from "@mui/material";
import { Container, useTheme } from "@mui/system";

const hoverEffectStyling: SxProps<Theme> = {
    textAlign: "center",
  "&:hover": {
    textDecoration: "underline",
    textDecorationThickness: "0.01rem",
    textUnderlineOffset: "0.5rem",
  },
};

function Footer() {
  const theme = useTheme();
  return (
    <Container
      maxWidth="xl"
      sx={{
        height: "auto",
        marginTop: "6rem",
      }}
    >
      <Divider
        sx={{
          marginBottom: "1.5rem",
          backgroundColor: theme.palette.text.primary,
        }}
      ></Divider>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <List sx={{ "& span": { textAlign: "center" } }}>
            <ListItem disablePadding>
              <ListItemText>ABOUT US</ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText sx={hoverEffectStyling}>Our Story</ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText sx={hoverEffectStyling}>Sustainability</ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText sx={hoverEffectStyling}>Work with us</ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText sx={hoverEffectStyling}>Press</ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemText sx={{ textAlign: "center" }}>
                CUSTOMER SERVICE
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText sx={hoverEffectStyling}>
                Delivery info
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText sx={hoverEffectStyling}>
                Returns & Refunds
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText sx={hoverEffectStyling}>
                Terms & Conditions
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText sx={hoverEffectStyling}>FAQs</ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText sx={hoverEffectStyling}>
                Cookie Settings
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemText sx={{ textAlign: "center" }}>CONTACT</ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText sx={hoverEffectStyling}>
                Contact us
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText sx={hoverEffectStyling}>
                Our stores
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText sx={hoverEffectStyling}>
                Affiliates
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <Box
          sx={{
            borderRadius: "100rem",
            width: "4rem",
            height: "4rem",
            background: (theme) => theme.palette.primary.main,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0.5rem",
            "& img": {
              width: "2rem",
            },
          }}
        >
          <img src="/facebook.png" alt="" />
        </Box>
        <Box
          sx={{
            borderRadius: "100rem",
            width: "4rem",
            height: "4rem",
            background: (theme) => theme.palette.primary.main,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0.5rem",
            "& img": {
              width: "2rem",
            },
          }}
        >
          <img src="/contact.png" alt="" />
        </Box>
        <Box
          sx={{
            borderRadius: "100rem",
            width: "4rem",
            height: "4rem",
            background: (theme) => theme.palette.primary.main,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0.5rem",
            "& img": {
              width: "2rem",
            },
          }}
        >
          <img src="/instagram.png" alt="" />
        </Box>
      </Container>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "Josefin Sans",
        }}
      >
        <p>© 2023 Our Furnished Home</p>
      </Container>
    </Container>
  );
}

export default Footer;
