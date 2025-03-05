import "./customers.scss";

import { DataGrid } from "@mui/x-data-grid";
import { existingCustomers } from "../../data";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Customers = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "phoneNumber", headerName: "Phone Number", width: 180 },
    { field: "totalSpent", headerName: "Total Spent", width: 130 },
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
