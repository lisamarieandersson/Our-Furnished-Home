import { Box, Button, Container, Modal, Typography } from "@mui/material";
import React from "react";
import AddProductForm from "./AddProductForm";

function AddProductModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (!open) return null;
  return (
    <Container>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box>
          <AddProductForm />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Button
            onClick={handleClose}
            style={{
              position: "fixed",
              padding: "0",
              top: "15px",
              left: "5px",
            }}>
            <p>Stäng</p>
          </Button>
        </Box>
      </Modal>
    </Container>
  );
}

export default AddProductModal;
