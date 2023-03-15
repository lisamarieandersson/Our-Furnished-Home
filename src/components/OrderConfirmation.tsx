import { Box, Container, Divider, Typography } from "@mui/material";

function OrderConfirmation() {
  return (
    <div>
      <Container
        maxWidth="md"
        sx={{ marginTop: "3rem", width: { xs: "90%", md: "100%" } }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "0.5rem",
          }}
        >
          <Typography variant="h6">Your order</Typography>
          <Typography variant="h6">#9574729</Typography>
        </Box>
        <Divider></Divider>
      </Container>
    </div>
  );
}

export default OrderConfirmation;
