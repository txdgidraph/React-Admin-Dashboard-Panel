import "./pos.scss";
import { useState } from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import {
  Button,
  TextField,
  Typography,
  Paper,
  Box,
  Autocomplete,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { itemInStock } from "../../data";
import { existingCustomers } from "../../data";
const sampleItems = itemInStock.map(
  ({ id, barcode, itemName, RetailPrice, avatar }) => ({
    id,
    barcode,
    itemName,
    price: RetailPrice, // Using RetailPrice as price
    quantity: 1, // Default quantity as 1
    discount: 0, // Default discount as 0
    avatar,
  })
);

const SearchCustomer = () => {
  return (
    <Autocomplete
      id="customer-search"
      sx={{ width: 300 }}
      options={existingCustomers}
      autoHighlight
      getOptionLabel={(option) =>
        `${option.firstName} ${option.lastName} (${option.idNumber})`
      }
      filterOptions={(options, state) => {
        return options.filter(
          (option) =>
            option.idNumber.toString().includes(state.inputValue) ||
            option.phoneNumber.includes(state.inputValue)
        );
      }}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <Box key={key} component="li" {...optionProps}>
            {option.firstName} {option.lastName} - {option.phoneNumber} (ID:{" "}
            {option.idNumber})
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Customer"
          slotProps={{
            htmlInput: {
              ...params.inputProps,
              autoComplete: "new-password",
            },
          }}
        />
      )}
    />
  );
};

const SelectPaymentType = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
  <FormControl fullWidth size="small">
    <InputLabel id="demo-simple-select-label">Type</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={age}
      label="Type"
      onChange={handleChange}
      sx={{
        height: 35, // Adjust height
        fontSize: "0.850rem", // Optional: Reduce font size
      }}
    >
      <MenuItem value={10}>Cash</MenuItem>
      <MenuItem value={50}>Mpesa</MenuItem>
      <MenuItem value={20}>Debit Card</MenuItem>
      <MenuItem value={30}>Credit Card</MenuItem>
      <MenuItem value={40}>Cheque</MenuItem>
    </Select>
  </FormControl>
</Box>
  );
};

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
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discountTotal = cart.reduce((acc, item) => acc + item.discount, 0);
  const tax = subtotal * 0.16; // 16% tax
  const total = subtotal + tax - discountTotal;

  // DataGrid columns
  const columns = [
    {
      field: "delete",
      headerName: "Delete",
      flex: 0.5, // Adjust as needed
      renderCell: (params: GridRenderCellParams) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <Button size="small" onClick={() => handleDelete(params.row.id)}>
            <img
              src="/images/delete_icon.png"
              alt=""
              style={{ width: "20px", height: "auto" }}
            />
          </Button>
        </Box>
      ),
    },
    {
      field: "avatar",
      headerName: "Avatar",
      flex: 0.5,
      renderCell: (params: GridRenderCellParams) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <img src={params.value} alt="Item" width={30} height={30} />
        </Box>
      ),
    },
    { field: "itemName", headerName: "Item Name", flex: 1 },
    { field: "price", headerName: "Price", flex: 0.5 },
    {
      field: "quantity",
      headerName: "Qty",
      flex: 0.5,
      renderCell: (params: GridRenderCellParams) => (
        <TextField
          size="small"
          type="number"
          value={params.row.quantity}
          onChange={(e) =>
            handleEditCell(params.row.id, "quantity", Number(e.target.value))
          }
          sx={{ width: "60px" }}
        />
      ),
    },
    {
      field: "discount",
      headerName: "Disc",
      flex: 0.5,
      renderCell: (params: GridRenderCellParams) => (
        <TextField
          size="small"
          type="number"
          value={params.row.discount}
          onChange={(e) =>
            handleEditCell(params.row.id, "discount", Number(e.target.value))
          }
          sx={{ width: "60px" }}
        />
      ),
    },
    {
      field: "total",
      headerName: "Total",
      flex: 0.7,
      renderCell: (params: GridRenderCellParams) => {
        const price = parseFloat(params.row?.price ?? 0);
        const quantity = parseInt(params.row?.quantity ?? 0);
        const discount = parseFloat(params.row?.discount ?? 0);
        return <strong>{price * quantity - discount}</strong>;
      },
    },
  ];

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {/* Left: DataGrid Table */}
      <div style={{ flex: 8.5 }}>
        <DataGrid
          rows={cart}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
          autoHeight
          sx={{
            "& .MuiDataGrid-cell": { fontSize: "12px" },
            "& .MuiDataGrid-columnHeader": {
              fontSize: "13px",
              fontWeight: "bold",
            },
          }}
        />
      </div>

      {/* Right: Receipt Summary */}
      <div style={{ flex: 3.5 }}>
        <Paper elevation={3} sx={{ padding: "15px", width: "100%" }}>
          <Typography variant="h6" gutterBottom>
            Choose Customer (optional)
          </Typography>
          <SearchCustomer />
          <Typography variant="body2">
            Number of Items: {cart.length}
          </Typography>
          <Typography variant="body2">
            Subtotal: Ksh{subtotal.toFixed(2)}
          </Typography>
          <Typography variant="body2">
            Total Discount: -Ksh{discountTotal.toFixed(2)}
          </Typography>
          <Typography variant="body2">
            Tax (16%): Ksh{tax.toFixed(2)}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginTop: "10px" }}
          >
            Total: Ksh{total.toFixed(2)}
          </Typography>
          <Typography variant="body2">Payments Total: Ksh0.00</Typography>
          <Typography variant="h6" sx={{ fontWeight:"bold" }}>
            Amount Due: Ksh {total.toFixed(2)}
          </Typography>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "5px",
                borderTop: "1px solid grey",
                paddingTop:"1em"
              }}
            >
              <Typography variant="body2">Select Payment Type: </Typography>
              <SelectPaymentType />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                justifyContent: "space-between",
                marginTop:"1em",
                marginBottom:"1em"
              }}
            >
              <Typography variant="body2">Amount Tendered:</Typography>
              <input
                type="number"
                placeholder="Enter amount"
                style={{ padding: "5px", width: "100px" }}
              />
            </div>
            <div className="pos_add_payment">
              <img
                src="/images/credit-card.png"
                alt=""
                className="pos_credit_card"
              />
              <Typography variant="body2">Add Payment</Typography>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default PointOfSaleScreen;
