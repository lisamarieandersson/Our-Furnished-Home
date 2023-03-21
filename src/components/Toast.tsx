import { Theme } from "@emotion/react";
import { Box, SxProps } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import React from "react";
import { CartItem } from "../../data/index";
import { theme } from "../theme";

const toastStyling: SxProps<Theme> = {
  background: theme.palette.primary.main,
  color: theme.palette.text.primary,
  textAlign: "center",
  fontSize: "1rem",
  "& .MuiAlert-action": {
    padding: 0,
  },
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Toast({
  open,
  onClose,
  lastAddedItem,
}: {
  open: boolean;
  onClose: () => void;
  lastAddedItem: CartItem | null;
}) {
  return (
    <Stack spacing={2} sx={{ width: "20%" }}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={onClose}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Alert
          icon={false}
          sx={toastStyling}
          onClose={onClose}
          severity="success"
        >
          {"Product added to bag"}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "0.5rem",
            }}
          >
            <img
              src={lastAddedItem?.image}
              alt={lastAddedItem?.title}
              style={{
                width: "5rem",
                border: "1px solid #00000047",
              }}
            />
            <h4>{lastAddedItem?.title}</h4>
            <h4>{lastAddedItem?.price} SEK</h4>
          </Box>
          <Button
            // component={Link} to="/checkout"
            variant="outlined"
            color="secondary"
            sx={{ marginTop: "0.7rem", width: "80%", fontSize: "0.8rem" }}
          >
            Go to bag
          </Button>
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default Toast;
