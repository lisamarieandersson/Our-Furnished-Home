import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../data";
import { useProduct } from "../contexts/AdminProductContext";
import { theme } from "../theme";
import DeleteProductDialog from "./DeleteProductDialog";

type Props = {
  product: Product;
};

function AdminProductRows(props: Props) {
  const [open, setOpen] = React.useState(false);
  // const { products } = useProduct();
  const { removeProduct } = useProduct();
  const [deleteProductDialogOpen, setDeleteProductDialogOpen] =
    React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {props.product.id}
        </TableCell>
        <TableCell align="center">{props.product.title}</TableCell>
        <TableCell align="center">{props.product.price} SEK</TableCell>
      </TableRow>
      <TableRow data-cy="product">
        <TableCell sx={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={!open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table
                size="medium"
                aria-label="purchases"
                sx={{
                  // minWidth: "2rem",
                }}
              >
                <TableHead>
                  <TableRow sx={{ bgcolor: theme.palette.primary.main }}>
                    <TableCell align="center" sx={{ fontSize: "1.1rem" }}>
                      Id
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: "1.1rem" }}>
                      Title
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: "1.1rem" }}>
                      Price
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableRow>
                  <TableCell align="center" data-cy="product-id">
                    {props.product.id}
                  </TableCell>
                  <TableCell align="center" data-cy="product-title">
                    {props.product.title}
                  </TableCell>
                  <TableCell align="center" data-cy="product-price">
                    {props.product.price} SEK
                  </TableCell>
                </TableRow>
                <TableRow sx={{ bgcolor: theme.palette.primary.main }}>
                  <TableCell
                    align="center"
                    sx={{ width: "33%", fontSize: "1.1rem" }}
                  >
                    Image
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ width: "33%", fontSize: "1.1rem" }}
                  >
                    Description
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "1.1rem" }}>
                    Brand
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">
                    <img
                      src={props.product.image}
                      alt={props.product.title}
                      style={{ width: "8rem" }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    {props.product.description}
                  </TableCell>
                  <TableCell align="center"> {props.product.brand}</TableCell>
                </TableRow>
              </Table>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "0.5rem",
                  gap: "0.5rem",
                }}
              >
                <IconButton
                  className="material-symbols-outlined"
                  data-cy="admin-edit-product"
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    color: "black",
                    fontSize: "2rem",
                  }}
                  component={Link}
                  to={`/admin/product/${props.product.id}`}
                >
                  edit
                </IconButton>
                <IconButton
                  className="material-symbols-outlined"
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    color: "black",
                    fontSize: "2rem",
                  }}
                  data-cy="admin-remove-product"
                  onClick={() => setDeleteProductDialogOpen(true)}
                >
                  delete
                </IconButton>
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <DeleteProductDialog
        open={deleteProductDialogOpen}
        handleClose={() => setDeleteProductDialogOpen(false)}
        removeProduct={() => removeProduct(props.product)}
      />
    </React.Fragment>
  );
}

export default AdminProductRows;
