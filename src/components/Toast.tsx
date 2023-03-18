import { Theme } from "@emotion/react";
import { Box, SxProps } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import * as React from "react";
import { products } from "../../data/index";
import { theme } from "../theme";

const toastStyling: SxProps<Theme> = {
  width: "20%",
  background: theme.palette.primary.main,
  color: theme.palette.text.primary,
  textAlign: "center",
  fontSize: "1rem",
  justifyContent: "center",
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Toast() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "20%" }}>
      <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          icon={false}
          sx={toastStyling}
          onClose={handleClose}
          severity="success"
        >
          {"Product added to bag"}
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.5rem" }}>
            <img
              style={{ width: "40%", border: "1px solid #00000047", }}
              src={products[0].image}
              alt={products[0].title}
            />
            <h4>{products[0].title}</h4>
            <h4>{products[0].price}SEK</h4>
          </Box>
          <Button
            variant="outlined"
            color="secondary"
            sx={{ marginTop: "0.7rem", width: "70%", fontSize: "0.8rem" }}
          >
            Go to bag
          </Button>
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default Toast;
