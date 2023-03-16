import {
  Button,
  CardContent,
  CardMedia,
  Container,
  Paper,
} from "@mui/material";
import Box from "@mui/material/Box";
import { styled, SxProps, Theme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/index";

/*  Styling */

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.subtitle2,
  textAlign: "left",
  color: theme.palette.text.primary,
  boxShadow: "none",
  "& img": {
    width: "100%",
    height: "auto",
    objectFit: "cover", // Ensures that the image fills the available space while preserving its aspect ratio
  },
}));

const rootStyle: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  marginTop: "1.5rem",
};

const cardContentStyle: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  textAlign: "left",
  "@media (min-width: 960px)": {
    // Media query for desktop view
    width: "100%", // Set width to auto to allow content to fill available space
    height: "auto", // Set height to 50% to take up more vertical space
    paddingLeft: "2rem",
  },
};

/**
 *
 * @returns a Product card with image, brand, title, price, description and add to bag button
 */
function ProductCard() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  const [quantity, setQuantity] = useState(1);

  const handleAddQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleRemoveQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  if (!product) {
    return (
      <div>
        <Typography>Sorry! The product was not found.</Typography>
      </div>
    );
  }

  return (
    <Container maxWidth="xl" sx={rootStyle}>
      <Box sx={{ width: "90%" }}>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid key={product.id} xs={12} sm={12} md={12} data-cy="product">
            <Item
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <CardMedia>
                <img src={product.image} alt={product.title} />
              </CardMedia>
              <CardContent sx={cardContentStyle}>
                <Typography variant="overline" sx={{ marginBottom: "1rem" }}>
                  {product.brand}
                </Typography>
                <Typography
                  variant="h5"
                  data-cy="product-title"
                  sx={{ marginBottom: "1rem" }}
                >
                  {product.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ marginBottom: "2rem" }}
                  data-cy="product-price"
                >
                  {product.price} SEK
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    marginBottom: "2rem",
                  }}
                >
                  {product.description}
                </Typography>
                <Typography variant="subtitle1">Quantity</Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <Button
                    variant="text"
                    onClick={handleRemoveQuantity}
                    sx={{
                      fontSize: "1.3rem",
                      color: (theme) => theme.palette.text.primary,
                    }}
                  >
                    –
                  </Button>
                  <Typography variant="subtitle1">{quantity}</Typography>
                  <Button
                    variant="text"
                    onClick={handleAddQuantity}
                    sx={{
                      fontSize: "1.3rem",
                      color: (theme) => theme.palette.text.primary,
                    }}
                  >
                    +
                  </Button>
                </Box>
                <Button variant="contained">ADD TO BAG</Button>
              </CardContent>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default ProductCard;
