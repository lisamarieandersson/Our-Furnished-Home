import { Theme } from "@emotion/react";
import { Box, SxProps, Typography } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import * as React from "react";
import { theme } from "../theme";
import { products } from "../../data/index";

const toastStyling: SxProps<Theme> = {
  width: "100%",
  background: theme.palette.primary.main,
  color: theme.palette.text.primary,
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
          <Box>

          </Box>
        </Alert>
      </Snackbar>
      <Alert sx={toastStyling} icon={false} severity="success">
        Product added to bag
      </Alert>
    </Stack>
  );
}

export default Toast;
