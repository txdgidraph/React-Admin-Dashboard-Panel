import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid } from "@mui/material"; // Import Grid from MUI

interface AddNewCustomerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddNewCustomer: React.FC<AddNewCustomerProps> = ({ open, setOpen }) => {
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
            const formData = new FormData(
              event.currentTarget as HTMLFormElement
            );
            const newItem = Object.fromEntries(formData.entries());
            console.log(newItem); // Replace with API call or state update
            handleClose();
          },
        },
      }}
    >
      <DialogTitle>Add New Customer</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Fill in the details to add a new customer.
        </DialogContentText>

        <Grid container spacing={2}>
          {/* ID Number & companyName */}
          <Grid item xs={6}>
            <TextField
              autoFocus
              required
              margin="dense"
              name="idNumber"
              label="ID Number"
              type="number"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              margin="dense"
              name="phoneNumber"
              label="Phone Number"
              type="number"
              fullWidth
              variant="standard"
            />
          </Grid>

{/* First Name & Last Name */}
<Grid item xs={6}>
            <TextField
              required
              margin="dense"
              name="firstName"
              label="First Name"
              type="text"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              margin="dense"
              name="lastName"
              label="Last Name"
              type="text"
              fullWidth
              variant="standard"
            />
          </Grid>
          {/* Cost Price & Sell Price */}

          <Grid item xs={12}>
            <TextField
              required
              margin="dense"
              name="email"
              label="Email"
              type="email"
              fullWidth
              variant="standard"
            />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit" variant="contained">
          Add Customer
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddNewCustomer;
