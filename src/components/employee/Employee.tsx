import { DataGrid } from "@mui/x-data-grid";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { Button, Stack } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { employeeList } from "../../data";
import "./employee.scss"
import AddEmployee from "./AddEmployee";
const Employee = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "idNumber", headerName: "ID Number", width: 100 },
    { field: "firstName", headerName: "First Name", width: 130 },
    { field: "lastName", headerName: "Last Name" },
    { field: "email", headerName: "Email", width:170 },
    { field: "phoneNumber", headerName: "Phone No", width: 130 },

    { field: "role", headerName: "Role", width: 130 },
    {
      field: "employeeAvatar",
      headerName: "Avatar",
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
    {
        field: "employeeSettings",
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
      <div >
        <Link to="" className="backButton" onClick={()=>navigate(-1)}>
        <img src="/images/back-button.png" alt="" className="backIcon" />
        <span>Go Back</span>
        </Link>
      </div>
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
              NEW EMPLOYEE
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
      <AddEmployee open={open} setOpen={setOpen}/>
      {/* Pass open state and setOpen function as props */}
      <div style={{ maxWidth: "100%", overflow: "auto", padding: "1em" }}>
        <div style={{ height: "500px" }}>
          <DataGrid
            rows={employeeList} // Use the items data
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

export default Employee;
