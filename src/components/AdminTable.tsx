import {
  Box,
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../contexts/AdminProductContext";
import AdminProductRows from "./AdminProductRows";

function AdminTable() {
  const [open, setOpen] = useState(false);
  const { products } = useProduct();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "2rem",
          marginBottom: "1rem",
        }}>
        <h2>Admin</h2>
        <Button
          variant="contained"
          sx={{ height: "10%" }}
          component={Link}
          to="/admin/product/:id/">
          + Add product
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="center" sx={{ fontSize: "1.2rem" }}>
                Id
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "1.2rem" }}>
                Title
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "1.2rem" }}>
                Price
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <AdminProductRows key={product.id} product={product} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

const styleer = {
  // position: "absolute" as "absolute",
  // top: "50%",
  // left: "50%",
  // transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default AdminTable;
