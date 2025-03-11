import { DataGrid } from "@mui/x-data-grid";
import { itemInStock } from "../../data";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import AddNewItem from "./AddNewItem";
import { Link } from "react-router-dom";

const Items = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(itemInStock);

  // Function to handle search input
  const handleSearch = (event: any) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter items based on the search query
    const filtered = itemInStock.filter((item) =>
      item.itemName.toLowerCase().includes(query)
    );

    setFilteredItems(filtered);
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
        <Link
          to=""
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            alignItems: "center", // Center vertically
            justifyContent: "center", // Center horizontally
          }}
        >
          <img
            src={params.value}
            alt="Item Avatar"
            width={20}
            height={20}
            style={{
              filter: "grayscale(100%) contrast(0)",
            }}
          />
        </Link>
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

            <TextField
              label="Search by Item Name"
              variant="outlined"
              size="small"
              value={searchQuery}
              onChange={handleSearch}
              sx={{ width: 300 }}
            />
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
        <div style={{ height: "500px" }}>
          <DataGrid
            rows={filteredItems} // Use the filtered items
            columns={columns}
            checkboxSelection
            disableRowSelectionOnClick
            sx={{
              "& .MuiDataGrid-cell": {
                fontSize: "12px",
              },
              "& .MuiDataGrid-columnHeader": {
                fontSize: "13px",
                fontWeight: "bold",
              },
              "& .MuiDataGrid-columnHeaderTitle": {
                fontSize: "13px",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Items;
