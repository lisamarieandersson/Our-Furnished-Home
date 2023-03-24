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
import { products } from "../../data";
import AddProductModal from "./AddProductModal";
import AdminProductRows from "./AdminProductRows";

function AdminTable() {
  const [open, setOpen] = useState(false);
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
          onClick={() => setOpen(true)}>
          + Add product
        </Button>
        <AddProductModal open={open} onClose={() => setOpen(false)} />
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

export default AdminTable;
