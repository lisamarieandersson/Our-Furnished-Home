import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
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
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }} data-cy="product">
        <TableCell sx={{ padding: 0 }} />
        <TableCell component="th" scope="row" align="center">
          <img
            src={props.product.image}
            alt={props.product.title}
            style={{ width: "4rem" }}
          />
        </TableCell>
        <TableCell align="center" data-cy="product-id">
          {props.product.id}
        </TableCell>
        <TableCell align="center" data-cy="product-title">
          {props.product.title}
        </TableCell>
        <TableCell align="center" data-cy="product-price">
          {props.product.price} SEK
        </TableCell>
        <TableCell align="center">
          <IconButton
            className="material-symbols-outlined"
            data-cy="admin-edit-product"
            sx={{
              bgcolor: theme.palette.primary.main,
              color: "black",
              fontSize: "1.8rem",
              margin: "0.5rem",
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
              fontSize: "1.8rem",
            }}
            data-cy="admin-remove-product"
            onClick={() => setDeleteProductDialogOpen(true)}
          >
            delete
          </IconButton>
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
