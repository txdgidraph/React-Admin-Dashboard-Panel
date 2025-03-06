import { DataGrid } from "@mui/x-data-grid";
import { itemInStock } from "../../data";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { Button, Stack } from "@mui/material";
import { useState } from "react";
import AddNewItem from "../add_new_item/AddNewItem";

const Items = () => {
    const [open, setOpen] = useState(false);
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "barcode", headerName: "Barcode", width: 100 },
    { field: "itemName", headerName: "Item Name", width: 130 },
    { field: "category", headerName: "Category" },
    { field: "companyName", headerName: "Comapny Name", width: 130 },
    { field: "costPrice", headerName: "Cost Price" },
    { field: "sellPrice", headerName: "Sell Price" },
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
        <img src={params.value} alt="Item Avatar" width={20} height={20} />
      ),
    },
  ];
  return (
    <div>
        <div className="buttonsContainer">
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
      {/* Pass open state and setOpen function as props */}
      <AddNewItem open={open} setOpen={setOpen} />
    <div style={{ maxWidth: "100%", overflow: "auto", padding: "1em" }}>
      <div style={{ height: "500px"}}>
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
    </div></div>
  );
};

export default Items;
