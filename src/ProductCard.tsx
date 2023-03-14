import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import { Product, products } from "../data/index";

// interface Props {
//   image: string;
//   title: string;
//   brand: string;
//   price: number;
//   onClick?: () => void;
// }

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body1,
  //padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
  "& img": {
    // Sets the image size using CSS
    width: "100%",
    height: "450px", // Adjust this value to desired image height
    objectFit: "cover", // Ensures that the image fills the available space while preserving its aspect ratio
  },
}));

function ProductCard() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={1}>
        {products.map((product: Product) => (
          <Grid key={product.id} xs={12} sm={6} md={4}>
            <Item>
              <img src={product.image} alt={product.title} />
              <p data-cy="product-title">{product.title}</p>
              <p>{product.brand}</p>
              <p data-cy="product-price">{product.price} SEK</p>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductCard;
