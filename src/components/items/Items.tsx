import { DataGrid } from "@mui/x-data-grid";
import { itemInStock } from "../../data";
import { GridRenderCellParams } from "@mui/x-data-grid";

const Items = () => {
  const columns = [
    { field: "id", headerName: "ID", width:50  },
    { field: "barcode", headerName: "Barcode", width:100},
    { field: "itemName", headerName: "Item Name", width:130},
    { field: "category", headerName: "Category" },
    { field: "companyName", headerName: "Comapny Name", width:130 },
    { field: "costPrice", headerName: "Cost Price"},
    { field: "sellPrice", headerName: "Sell Price" },
    { field: "quantity", headerName: "Quantity" },
    { field: "taxPercent", headerName: "Tax %", width:60 },
    { 
        field: "avatar", 
        headerName: "Avatar", 
        renderCell: (params: GridRenderCellParams) => (
          <img src={params.value} alt="Item Avatar" width={40} height={40} />
        ) 
      },
    // { field: "update_inventory", headerName: "", width: 70 },
    // { field: "inventory_count_items", headerName: "", width: 70 },
    // { field: "update_item", headerName: "", width: 70 },
  ];
  return (
    <div style={{ maxWidth: "100%", overflow: "auto", padding: "1em" }}>
      <div style={{ height: "500px", width: "100%" }}>
        <DataGrid
          rows={itemInStock} // Use the items data
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
          sx={{
            "& .MuiDataGrid-cell": {
              fontSize: "12px",  // Reduce cell font size
            },
            "& .MuiDataGrid-columnHeader": {
              fontSize: "13px",  // Reduce column header font size
              fontWeight: "bold",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontSize: "13px",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Items;