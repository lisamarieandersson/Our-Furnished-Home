import { Box, SxProps, Theme } from "@mui/material";

const iconStyle: SxProps<Theme> = {
  fontSize: { xs: "2rem", sm: "2.5rem" },
  cursor: "pointer",
  padding: { xs: "0rem", md: "0.3rem" },
};

const shoppingBagNumber: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Prata",
  fontSize: {xs: "0.7rem", sm: "0.9rem"},
  bgcolor: "#e8dbce",
  borderRadius: "50%",
  position: "relative",
  py: {xs: "0.25rem", sm: "0.4rem"},
  px: {xs: "0.3rem", sm: "0.5rem"},
  height: "100%",
  right: "0.5rem",
  bottom: "0.5rem",
};

function HeaderIcons() {
  return (
    <div style={{ display: "flex" }}>
      <Box className="material-symbols-outlined" sx={iconStyle}>
        admin_panel_settings
      </Box>
      <Box className="material-symbols-outlined" sx={iconStyle}>
        favorite
      </Box>
      <Box sx={iconStyle}>
        <Box
          className="material-symbols-outlined"
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem" },
            display: "flex",
          }}
        >
          shopping_bag
          <Box sx={shoppingBagNumber}>2</Box>
        </Box>
      </Box>
    </div>
  );
}

export default HeaderIcons;
