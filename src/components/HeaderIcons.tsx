import { Badge, Box, Link, SxProps, Theme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import { theme } from "../theme";

const iconStyle: SxProps<Theme> = {
  fontSize: { xs: "2rem", sm: "2.5rem" },
  cursor: "pointer",
  padding: { xs: "0rem", md: "0.3rem" },
};

const StyledLink = (props: any) => (
  <Link component={RouterLink} underline="none" color="inherit" {...props} />
);

function HeaderIcons() {
  const { items } = useShoppingCart();

  return (
    <div style={{ display: "flex" }}>
      <Box className="material-symbols-outlined" sx={iconStyle}>
        admin_panel_settings
      </Box>
      <Box className="material-symbols-outlined" sx={iconStyle}>
        favorite
      </Box>
      <StyledLink to="/checkout" data-cy="cart-link" >
        <Badge
          data-cy="cart-items-count-badge"
          badgeContent={items.length}
          color="primary"
          sx={{
            "& .MuiBadge-badge": {
              fontFamily: theme.typography.subtitle1.fontFamily,
            },
          }}
        >
          <Box
            className="material-symbols-outlined"
            sx={{ fontSize: { xs: "2rem", sm: "2.5rem", cursor: "pointer" } }}
          >
            shopping_bag
          </Box>
        </Badge>
      </StyledLink>
    </div>
  );
}

export default HeaderIcons;
