import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid } from "@mui/material"; // Import Grid from MUI

interface AddNewItemProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddNewItem: React.FC<AddNewItemProps> = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
  open={open}
  onClose={handleClose}
  slotProps={{
    paper: {
      component: "form",
      onSubmit: (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget as HTMLFormElement);
        const newItem = Object.fromEntries(formData.entries());
        console.log(newItem); // Replace with API call or state update
        handleClose();
      },
    },
  }}
>
  <DialogTitle>Add New Item</DialogTitle>
  <DialogContent>
    <DialogContentText>Fill in the details to add a new item.</DialogContentText>

    <Grid container spacing={2}>
      {/* ID & Barcode */}
      <Grid item xs={6}>
        <TextField autoFocus required margin="dense" name="id" label="ID" fullWidth variant="standard" />
      </Grid>
      <Grid item xs={6}>
        <TextField required margin="dense" name="barcode" label="Barcode" fullWidth variant="standard" />
      </Grid>

      {/* Item Name & Category (Full Width) */}
      <Grid item xs={12}>
        <TextField required margin="dense" name="itemName" label="Item Name" fullWidth variant="standard" />
      </Grid>
      <Grid item xs={12}>
        <TextField required margin="dense" name="category" label="Category" fullWidth variant="standard" />
      </Grid>

      {/* Company Name (Full Width) */}
      <Grid item xs={12}>
        <TextField required margin="dense" name="companyName" label="Company Name" fullWidth variant="standard" />
      </Grid>

      {/* Cost Price & Sell Price */}
      <Grid item xs={6}>
        <TextField required margin="dense" name="costPrice" label="Cost Price" type="number" fullWidth variant="standard" />
      </Grid>
      <Grid item xs={6}>
        <TextField required margin="dense" name="sellPrice" label="Sell Price" type="number" fullWidth variant="standard" />
      </Grid>

      {/* Quantity & Tax Percent */}
      <Grid item xs={6}>
        <TextField required margin="dense" name="quantity" label="Quantity" type="number" fullWidth variant="standard" />
      </Grid>
      <Grid item xs={6}>
        <TextField required margin="dense" name="taxPercent" label="Tax Percent(s)" type="number" fullWidth variant="standard" />
      </Grid>

      {/* Avatar Upload */}
      <Grid item xs={12}>
        <input type="file" name="avatar" accept="image/*" style={{ marginTop: "1em" }} />
      </Grid>
    </Grid>

  </DialogContent>

  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button type="submit" variant="contained">Add Item</Button>
  </DialogActions>
</Dialog>
  );
};

export default AddNewItem;
