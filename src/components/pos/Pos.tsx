import { useState } from "react";
import { DataGrid, GridRenderCellParams, GridValueGetter } from "@mui/x-data-grid";
import { Button, TextField, Stack, Typography, Paper } from "@mui/material";

// Sample items (this will be updated when scanning)
const sampleItems = [
  {
    id: 1,
    barcode: "12345678",
    itemName: "Laptop",
    price: 500,
    quantity: 1,
    discount: 0,
    avatar: "/images/POS.png",
  },
  {
    id: 2,
    barcode: "98765432",
    itemName: "Mouse",
    price: 20,
    quantity: 1,
    discount: 0,
    avatar: "/images/POS.png",
  },
];

const PointOfSaleScreen = () => {
  const [cart, setCart] = useState(sampleItems);

  // Function to update quantity and discount
  const handleEditCell = (id: number, field: string, value: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  // Function to remove item
  const handleDelete = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Calculate totals
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountTotal = cart.reduce((acc, item) => acc + item.discount, 0);
  const tax = subtotal * 0.16; // 16% tax
  const total = subtotal + tax - discountTotal;

  // DataGrid columns
  const columns = [
    {
      field: "delete",
      headerName: "Delete",
      width: 70,
      renderCell: (params: GridRenderCellParams) => (
        <Button size="small" onClick={() => handleDelete(params.row.id)}>
          <img src="/images/delete_icon.png" alt="" />
        </Button>
      ),
    },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 60,
      renderCell: (params: GridRenderCellParams) => (
        <img src={params.value} alt="Item" width={30} height={30} />
      ),
    },
    { field: "itemName", headerName: "Item Name", width: 150 },
    { field: "price", headerName: "Price", width: 80 },
    {
      field: "quantity",
      headerName: "Qty",
      width: 80,
      renderCell: (params: GridRenderCellParams) => (
        <TextField
          size="small"
          type="number"
          value={params.row.quantity}
          onChange={(e) => handleEditCell(params.row.id, "quantity", Number(e.target.value))}
          sx={{ width: "60px" }}
        />
      ),
    },
    {
      field: "discount",
      headerName: "Disc",
      width: 80,
      renderCell: (params: GridRenderCellParams) => (
        <TextField
          size="small"
          type="number"
          value={params.row.discount}
          onChange={(e) => handleEditCell(params.row.id, "discount", Number(e.target.value))}
          sx={{ width: "60px" }}
        />
      ),
    },
    {
        field: "total",
        headerName: "Total",
        width: 100,
        valueGetter: (params) => {
          if (!params || !params.row) return 0; // Ensure params and row exist
          const price = params.row.price || 0;
          const quantity = params.row.quantity || 0;
          const discount = params.row.discount || 0;
          return price * quantity - discount;
        },
      }
  ];

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      

      {/* Left: DataGrid Table */}
      <div style={{ flexGrow: 1 }}>
        <DataGrid
          rows={cart}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
          autoHeight
          sx={{
            "& .MuiDataGrid-cell": { fontSize: "12px" },
            "& .MuiDataGrid-columnHeader": { fontSize: "13px", fontWeight: "bold" },
          }}
        />
      </div>

      {/* Right: Receipt Summary */}
      <Paper elevation={3} sx={{ padding: "15px", width: "250px" }}>
        <Typography variant="h6" gutterBottom>
          Receipt
        </Typography>
        <Typography variant="body2">Items: {cart.length}</Typography>
        <Typography variant="body2">Subtotal: ${subtotal.toFixed(2)}</Typography>
        <Typography variant="body2">Discount: -${discountTotal.toFixed(2)}</Typography>
        <Typography variant="body2">Tax (16%): ${tax.toFixed(2)}</Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: "10px" }}>
          Total: ${total.toFixed(2)}
        </Typography>
        <Typography variant="body2">Payments Total: $0.00</Typography>
        <Typography variant="h6" sx={{ color: "red" }}>
          Amount Due: ${total.toFixed(2)}
        </Typography>
      </Paper>
    </div>
  );
};

export default PointOfSaleScreen;
