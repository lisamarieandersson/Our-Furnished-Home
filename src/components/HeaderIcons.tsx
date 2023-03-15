import { Box, SxProps, Theme } from "@mui/material";

const iconStyle: SxProps<Theme> = {
  fontSize: {xs: "2rem", sm: "2.5rem" },
  cursor: "pointer",
  padding: { xs: "0rem", md: "0.3rem" },
};

function HeaderIcons() {
  return (
    <div>
      <Box className="material-symbols-outlined" sx={iconStyle}>
        admin_panel_settings
      </Box>
      <Box className="material-symbols-outlined" sx={iconStyle}>
        favorite
      </Box>
      <Box className="material-symbols-outlined" sx={iconStyle}>
        shopping_bag
      </Box>
    </div>
  );
}

export default HeaderIcons;
