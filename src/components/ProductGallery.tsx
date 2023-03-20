import {
  Box,
  CardContent,
  Container,
  IconButton,
  LinkProps,
  Paper,
  styled,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../../data/index";
import { useShoppingCart } from "../contexts/ShoppingCartContext";

/*  Styling */

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.subtitle2,
  textAlign: "left",
  color: theme.palette.text.primary,
  cursor: "pointer",
  boxShadow: "none",
  transition: "box-shadow 0.3s ease-in-out",
  "&:hover": {
    boxShadow: "0 .125rem .625rem rgba(0, 0, 0, 0.2)",
    backgroundColor: "#FFFFFF",
  },
  "& img": {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },
}));

const rootStyle: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  marginTop: "1.5rem",
};

const StyledLink = styled(Link)<LinkProps>(() => ({
  textDecoration: "none",
  color: "inherit",
}));

/**
 *
 * @returns a product gallery consisting of cards for all the products with image, brand, title and price
 */
function ProductGallery() {
  const { addItem } = useShoppingCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <Container maxWidth="xl" sx={rootStyle}>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={2} columnSpacing={2}>
          {products.map((product) => (
            <Grid key={product.id} xs={12} sm={6} md={4} data-cy="product">
              <StyledLink
                to={`/product/${product.id}/${product.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                <Item>
                  <img src={product.image} alt={product.title} />
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: "0.4rem",
                    }}
                  >
                    <Box>
                      <Typography variant="overline">
                        {product.brand}
                      </Typography>
                      <Typography variant="subtitle2" data-cy="product-title">
                        {product.title}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{ marginTop: "1rem" }}
                        data-cy="product-price"
                      >
                        {product.price} SEK
                      </Typography>
                    </Box>
                    <Box>
                      <IconButton
                        onClick={(event) => {
                          event.stopPropagation(); // prevents the click event from propagating to the parent link element
                          addItem({ ...product, quantity });
                          event.preventDefault();
                        }}
                        className="material-symbols-outlined"
                        sx={{
                          fontSize: "2.4rem",
                          cursor: "pointer",
                          color: (theme) => theme.palette.text.primary,
                        }}
                        data-cy="product-buy-button"
                      >
                        shopping_bag
                      </IconButton>
                    </Box>
                  </CardContent>
                </Item>
              </StyledLink>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default ProductGallery;
