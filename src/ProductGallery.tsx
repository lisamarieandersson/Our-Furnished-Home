import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { styled, SxProps, Theme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { products } from "../data/index";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.subtitle2,
  textAlign: "left",
  color: theme.palette.text.primary,
  "& img": {
    width: "100%",
    height: "500px",
    objectFit: "cover", // Ensures that the image fills the available space while preserving its aspect ratio
  },
}));

const rootStyle: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
};

function ProductGallery() {
  return (
    <Container maxWidth="xl" sx={rootStyle}>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={1}>
          {products.map((product) => (
            <Grid key={product.id} xs={12} sm={6} md={4} data-cy="product">
              <Item>
                <img src={product.image} alt={product.title} />
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography gutterBottom variant="body2">
                      {product.brand}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body1"
                      data-cy="product-title"
                    >
                      {product.title}
                    </Typography>
                    <Typography variant="subtitle2" data-cy="product-price">
                      {product.price} SEK
                    </Typography>
                  </Box>
                  <Box>
                    <Box
                      className="material-symbols-outlined"
                      sx={{
                        fontSize: "2.4rem",
                        cursor: "pointer",
                      }}
                    >
                      shopping_bag
                    </Box>
                  </Box>
                </CardContent>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default ProductGallery;
