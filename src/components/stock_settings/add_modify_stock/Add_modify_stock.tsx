import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import "./add_modify_stock.scss";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { itemInStock } from "../../../data";
import { Stack } from "@mui/material";

// Define props type
interface AddModifyStockProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddModifyStock: React.FC<AddModifyStockProps> = ({ open, setOpen }) => {
  const [modifyStock, setModifyStock] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "barcode", headerName: "Barcode", width: 100 },
    { field: "itemName", headerName: "Item Name", width: 130 },
    { field: "category", headerName: "Category" },
    { field: "companyName", headerName: "Comapny Name", width: 130 },
    { field: "WholesalePrice", headerName: "Wholesale Price", width: 130 },
    { field: "RetailPrice", headerName: "Retail Price" },
    { field: "quantity", headerName: "Quantity" },
    { field: "taxPercent", headerName: "Tax %", width: 60 },
    {
      field: "avatar",
      headerName: "Avatar",
      renderCell: (params: GridRenderCellParams) => (
        <img src={params.value} alt="Item Avatar" width={20} height={20} />
      ),
    },
    {
      field: "itemSettings",
      headerName: "",
      renderCell: (params: GridRenderCellParams) => (
        <Link to="">
          <img
            src={params.value}
            alt="Item Avatar"
            width={20}
            height={20}
            style={{ filter: "grayscale(100%) contrast(0)" }}
          />
        </Link>
      ),
    },
  ];

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
      <div className="stockButtons">
        <Button variant="contained" onClick={() => setModifyStock(false)}>
          Add Stock
        </Button>
        <Button variant="contained" onClick={() => setModifyStock(true)}>
          Modify Stock
        </Button>
      </div>
      {!modifyStock ? (
        <>
          <DialogTitle>Add Stock</DialogTitle>
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
        </>
      ) : (
        <div>
          <div className="ams_buttonsContainer">
            <div className="deleteMailBtnCont">
              <Stack spacing={2} direction="row">
                <Button
                  variant="contained"
                  size="small" // Makes the button smaller
                  sx={{
                    backgroundColor: "#6E6F6E",
                    color: "white",
                    padding: "4px 10px", // Adjust padding for smaller height/width
                    fontSize: "12px", // Reduce font size
                    "&:hover": { backgroundColor: "darkgray" },
                  }}
                >
                  DELETE
                </Button>
                <Button
                  variant="contained"
                  size="small" // Makes the button smaller
                  sx={{
                    backgroundColor: "#6E6F6E",
                    color: "white",
                    padding: "4px 10px", // Adjust padding for smaller height/width
                    fontSize: "12px", // Reduce font size
                    "&:hover": { backgroundColor: "darkgray" },
                  }}
                >
                  GENERATE BARCODE
                </Button>
              </Stack>
            </div>
            <div className="deleteMailBtnCont">
              <Stack spacing={2} direction="row">
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => setOpen(true)} // Open dialog on click
                  sx={{
                    backgroundColor: "#f89727",
                    color: "white",
                    padding: "4px 10px", // Adjust padding for smaller height/width
                    fontSize: "12px", // Reduce font size
                    "&:hover": { backgroundColor: "darkgray" },
                  }}
                >
                  NEW ITEM
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: "#f89727",
                    color: "white",
                    padding: "4px 10px", // Adjust padding for smaller height/width
                    fontSize: "12px", // Reduce font size
                    "&:hover": { backgroundColor: "darkgray" },
                  }}
                >
                  CSV IMPORT
                </Button>
              </Stack>
            </div>
          </div>
          <DataGrid
            rows={itemInStock} // Use the items data
            columns={columns}
            checkboxSelection
            disableRowSelectionOnClick
            sx={{
              "& .MuiDataGrid-cell": {
                fontSize: "12px", // Reduce cell font size
              },
              "& .MuiDataGrid-columnHeader": {
                fontSize: "13px", // Reduce column header font size
                fontWeight: "bold",
              },
              "& .MuiDataGrid-columnHeaderTitle": {
                fontSize: "13px",
              },
            }}
          />
        </div>
      )}
    </Dialog>
  );
};

export default AddModifyStock;
