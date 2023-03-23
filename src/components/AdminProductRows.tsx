import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { Product } from "../../data";
import { theme } from "../theme";

type Props = {
  product: Product;
};

function AdminProductRows(props: Props) {
  const [open, setOpen] = React.useState(false);

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
      <TableRow>
        <TableCell sx={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",

                  // bgcolor: "pink",
                }}
              >
                <IconButton
                  className="material-symbols-outlined"
                  sx={{
                    // bgcolor: "lightblue",
                    color: "black",
                    fontSize: "2rem",
                  }}
                  // component={Link}
                  // to="/admin"
                >
                  edit
                </IconButton>
                <IconButton
                  className="material-symbols-outlined"
                  sx={{
                    // bgcolor: "lightblue",
                    color: "black",
                    fontSize: "2rem",
                  }}
                  // component={Link}
                  // to="/admin"
                >
                  delete
                </IconButton>
              </Box>
              <Table size="medium" aria-label="purchases">
                <TableHead>
                  <TableRow sx={{ bgcolor: theme.palette.primary.main }}>
                    <TableCell align="center">Id</TableCell>
                    <TableCell align="center">Title</TableCell>
                    <TableCell align="center">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="center">{props.product.id}</TableCell>
                    <TableCell align="center">{props.product.title}</TableCell>
                    <TableCell align="center">
                      {props.product.price} SEK
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ bgcolor: theme.palette.primary.main }}>
                    <TableCell align="center" sx={{ width: "33%" }}>
                      Image
                    </TableCell>
                    <TableCell align="center" sx={{ width: "33%" }}>
                      Description
                    </TableCell>
                    <TableCell align="center">Brand</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">
                      <img
                        src={props.product.image}
                        alt={props.product.title}
                        style={{ width: "10rem" }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      {props.product.description}
                    </TableCell>
                    <TableCell align="center"> {props.product.brand}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default AdminProductRows;
