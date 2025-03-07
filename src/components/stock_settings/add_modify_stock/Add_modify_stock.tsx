import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const AddModifyStock = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add / Modify Stock</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="id"
          name="id"
          label="Stock ID"
          type="text"
          fullWidth
          variant="outlined"
        />
        <TextField
          required
          margin="dense"
          id="barcode"
          name="barcode"
          label="Barcode"
          type="text"
          fullWidth
          variant="outlined"
        />
        <TextField
          required
          margin="dense"
          id="itemName"
          name="itemName"
          label="Item Name"
          type="text"
          fullWidth
          variant="outlined"
        />
        <TextField
          required
          margin="dense"
          id="category"
          name="category"
          label="Category"
          type="text"
          fullWidth
          variant="outlined"
        />
        <TextField
          required
          margin="dense"
          id="companyName"
          name="companyName"
          label="Company Name"
          type="text"
          fullWidth
          variant="outlined"
        />
        <TextField
          required
          margin="dense"
          id="costPrice"
          name="costPrice"
          label="Cost Price"
          type="number"
          fullWidth
          variant="outlined"
        />
        <TextField
          required
          margin="dense"
          id="sellPrice"
          name="sellPrice"
          label="Sell Price"
          type="number"
          fullWidth
          variant="outlined"
        />
        <TextField
          required
          margin="dense"
          id="quantity"
          name="quantity"
          label="Quantity"
          type="number"
          fullWidth
          variant="outlined"
        />
        <TextField
          required
          margin="dense"
          id="tax"
          name="tax"
          label="Tax Percent"
          type="number"
          fullWidth
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddModifyStock;
