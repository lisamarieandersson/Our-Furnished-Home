import { Theme } from "@emotion/react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  SxProps,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";
import HeaderIcons from "./HeaderIcons";

const pages = ["Products", "Brands", "Campaigns"];

const headerButtonsStyling: SxProps<Theme> = {
  color: "black",
  display: "block",
  fontSize: "1.1rem",
  textTransform: "none",
  marginRight: "1.5rem",
  "&:hover": {
    textDecoration: "underline",
    textDecorationThickness: "0.01rem",
    textUnderlineOffset: "0.5rem",
  },
};

function HeaderMain() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{ background: (theme) => theme.palette.background.default }}
    >
      <Container maxWidth="xl" sx={{ borderBottom: "0.01rem solid black" }}>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              aria-label="show"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "black" }}
            >
              <Box
                sx={{ fontSize: { xs: "2.1rem", sm: "2.5rem" } }}
                className="material-symbols-outlined"
              >
                menu
              </Box>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography padding="0.5rem">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={headerButtonsStyling}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: { xs: 0, md: 1 } }}>
            <Box
              component="img"
              src="/logohome.png"
              alt="logga"
              sx={{
                height: { xs: "6rem", sm: "7rem" },
                marginTop: "0.5rem",
                marginBottom: "1rem",
              }}
            />
          </Box>
          <Box
            sx={{
              flexGrow: { xs: 0.7 },
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <HeaderIcons />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default HeaderMain;
