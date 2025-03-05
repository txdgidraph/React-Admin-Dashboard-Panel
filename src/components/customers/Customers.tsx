import "./customers.scss";

import { DataGrid } from "@mui/x-data-grid";
import { existingCustomers } from "../../data";

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
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={existingCustomers} // Use the customer data
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default Customers;
