import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

const pages = ["Products", "Brands", "Campaigns"];

function ResponsiveAppBar() {
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
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ bgcolor: "#F1F0EF" }}>
        <Toolbar disableGutters>
          {/* Här är hamburgermenyn */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "black" }}
            >
              <Box
                style={{ fontSize: "2.5rem" }}
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
                  <Typography
                    padding="0.5rem"
                    fontFamily="Prata"
                    textAlign="center"
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Prata",
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
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
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontFamily: "Prata",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0.5 }}>
            <Box
              component="img"
              src="LoggaFH.png"
              alt="logga"
              sx={{
                height: "7rem",
                marginTop: "0.5rem",
                marginBottom: "1rem",
              }}
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: 'flex-end',
              color: "black",
            }}
          >
            <Box
              className="material-symbols-outlined"
              sx={{ fontSize: "3rem", cursor: "pointer" }}
            >
              admin_panel_settings
            </Box>
            <Box
              className="material-symbols-outlined"
              sx={{ fontSize: "3rem", cursor: "pointer" }}
            >
              favorite
            </Box>
            <Box
              className="material-symbols-outlined"
              sx={{ fontSize: "3rem", cursor: "pointer" }}
            >
              shopping_bag
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
