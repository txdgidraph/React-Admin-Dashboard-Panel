import "./customers.scss";

import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { existingCustomers } from "../../data";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useState } from "react";
import AddNewCustomer from "./AddCustomer";


// Notes:

// The Total Spent is Fetched from DB

// So it cannot be added when adding a new cutomer 

// Hence that option is not there



const Customers = () => {
  const [open, setOpen] = useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "phoneNumber", headerName: "Phone Number", width: 180 },
    { field: "totalSpent", headerName: "Total Spent", width: 130 },
    {
      field: "customerSettings",
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
    },
  ];

  return (
    <div>
      <div className="buttonsContainer">
        <div className="deleteMailBtnCont">
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#6E6F6E",
                color: "white",
                "&:hover": { backgroundColor: "darkgray" },
              }}
            >
              DELETE
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#6E6F6E",
                color: "white",
                "&:hover": { backgroundColor: "darkgray" },
              }}
            >
              SEND MAIL
            </Button>
          </Stack>
        </div>
        <div className="deleteMailBtnCont">
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              onClick={() => setOpen(true)}
              sx={{
                backgroundColor: "#9955BA",
                color: "white",
                "&:hover": { backgroundColor: "darkgray" },
              }}
            >
              NEW CUSTOMER
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#9955BA",
                color: "white",
                "&:hover": { backgroundColor: "darkgray" },
              }}
            >
              SEND MAIL
            </Button>
          </Stack>
          <AddNewCustomer open={open} setOpen={setOpen} />
        </div>
      </div>
      <div style={{ height: "500px", width: "100%" }}>
        <DataGrid
          rows={existingCustomers} // Use the customer data
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default Customers;
