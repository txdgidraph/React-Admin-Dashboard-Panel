import { DataGrid } from "@mui/x-data-grid";
import { suppliersList } from "../../data";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { Button, Stack } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import NewSupplier from "./NewSupplier";

const Suppliers = () => {
  const [open, setOpen] = useState(false);
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "companyName", headerName: "Company Name", width: 100 },
    { field: "agencyName", headerName: "Agency Name", width: 130 },
    { field: "category", headerName: "Category" },
    { field: "firstName", headerName: "First Name", width: 130 },
    { field: "lastName", headerName: "Last Name", width: 130 },
    { field: "email", headerName: "Email", width:170 },
    { field: "phoneNumber", headerName: "Phone No", width: 130 },
    {
        field: "supplierSettings",
        headerName: "",
        renderCell: (params: GridRenderCellParams) => (
          <Link
            to=""
            style={{
              display: "flex",
              alignItems: "center", // Center vertically
              justifyContent: "center", // Center horizontally
              height: "100%", // Ensure it fills the row height
              width: "100%", // Ensure full width
            }}
          >
            <img
              src={params.value}
              alt="Edit Icon"
              width={20}
              height={20}
              style={{ filter: "grayscale(100%) contrast(0)" }}
            />
          </Link>
        ),
      }
      
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
              EMAIL
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
              NEW SUPPLIER
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
      <NewSupplier open={open} setOpen={setOpen} />
      <div style={{ maxWidth: "100%", overflow: "auto", padding: "1em" }}>
        <div style={{ height: "500px" }}>
          <DataGrid
            rows={suppliersList} // Use the items data
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
      </div>
    </div>
  );
};

export default Suppliers;
