export const menu = [
  {
    id: 1,
    title: "START - END DAY",
    ur1: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    title: "SUMMARY INC REPORT",
    ur1: "/users/1",
    icon: "user.svg",
  },
  {
    id: 3,
    title: "Daily Sales Report",
    ur1: "/users",
    icon: "user.svg",
  },
  {
    id: 4,
    title: "Held Receipts",
    ur1: "/products",
    icon: "product.svg",
  },
  {
    id: 5,
    title: "Staff Sales Reports",
    ur1: "/",
    icon: "order.svg",
  },
  {
    id: 6,
    title: "Items",
    ur1: "/items",
    icon: "post.svg",
  },

  {
    id: 7,
    title: "Accept Returns",
    ur1: "/",
    icon: "element.svg",
  },
  {
    id: 8,
    title: "Layaway",
    ur1: "/",
    icon: "note.svg",
  },
  {
    id: 9,
    title: "Held Receipts",
    ur1: "/",
    icon: "form.svg",
  },
  {
    id: 10,
    title: "Calendar",
    ur1: "/",
    icon: "calendar.svg",
  },

  {
    id: 11,
    title: "Settings",
    ur1: "/",
    icon: "setting.svg",
  },
];

export const navBarMenuItems = [
  {
    id: 1,
    title: "POS",
    image:"/images/POS.png",
    ur1: "/",
  },
  {
    id: 1,
    title: "INVOICE",
    image:"/images/invoice.png",
    ur1: "/",
  },
  {
    id: 1,
    title: "CUSTOMERS",
    image:"/images/customer.png",
    ur1: "/customers",
  },
  {
    id: 1,
    title: "SUPPLIERS",
    image:"/images/supplier.png",
    ur1: "/",
  },
  {
    id: 1,
    title: "STOCK",
    image:"/images/stock.png",
    ur1: "/",
  },
  {
    id: 1,
    title: "ACCOUNTS",
    image:"/images/account.png",
    ur1: "/",
  },
  {
    id: 1,
    title: "EMPLOYEE",
    image:"/images/employee.png",
    ur1: "/",
  },
  {
    id: 1,
    title: "PAYROLL",
    image:"/images/payroll.png",
    ur1: "/",
  },
  {
    id: 1,
    title: "REPORTS",
    image:"/images/stock.png",
    ur1: "/",
  },
  {
    id: 1,
    title: "HELP",
    image:"/images/customer.png",
    ur1: "/",
  },
];

export const existingCustomers = [
  {
    id: 1,
    lastName: "Mwangi",
    firstName: "James",
    email: "james.mwangi@example.com",
    phoneNumber: "+254712345678",
    totalSpent: "Ksh 45,000"
  },
  {
    id: 2,
    lastName: "Achieng",
    firstName: "Grace",
    email: "grace.achieng@example.com",
    phoneNumber: "+254723456789",
    totalSpent: "Ksh 32,500"
  },
  {
    id: 3,
    lastName: "Kamau",
    firstName: "Peter",
    email: "peter.kamau@example.com",
    phoneNumber: "+254734567890",
    totalSpent: "Ksh 78,200"
  },
  {
    id: 4,
    lastName: "Otieno",
    firstName: "John",
    email: "john.otieno@example.com",
    phoneNumber: "+254745678901",
    totalSpent: "Ksh 21,000"
  },
  {
    id: 5,
    lastName: "Wambui",
    firstName: "Mary",
    email: "mary.wambui@example.com",
    phoneNumber: "+254756789012",
    totalSpent: "Ksh 55,600"
  },
  {
    id: 6,
    lastName: "Kariuki",
    firstName: "Samuel",
    email: "samuel.kariuki@example.com",
    phoneNumber: "+254767890123",
    totalSpent: "Ksh 37,800"
  },
  {
    id: 7,
    lastName: "Njeri",
    firstName: "Lucy",
    email: "lucy.njeri@example.com",
    phoneNumber: "+254778901234",
    totalSpent: "Ksh 92,300"
  },
  {
    id: 8,
    lastName: "Mutua",
    firstName: "Kevin",
    email: "kevin.mutua@example.com",
    phoneNumber: "+254789012345",
    totalSpent: "Ksh 41,900"
  },
  {
    id: 9,
    lastName: "Wafula",
    firstName: "Daniel",
    email: "daniel.wafula@example.com",
    phoneNumber: "+254790123456",
    totalSpent: "Ksh 64,500",
    update_inventory:"",
    inventory_count_items:"",
    update_item:""
  },
  {
    id: 10,
    lastName: "Chebet",
    firstName: "Ann",
    email: "ann.chebet@example.com",
    phoneNumber: "+254701234567",
    totalSpent: "Ksh 29,750",
    update_inventory:"",
    inventory_count_items:"",
    update_item:""
  }
];


export const itemInStock = [
  {
    id: 1,
    barcode: "12345678",
    itemName: "Laptop",
    category: "Electronics",
    companyName: "Tech Solutions Ltd",
    costPrice: 50000,
    sellPrice: 60000,
    quantity: 15,
    taxPercent: 16,
    avatar: "/images/POS.png",
    update_inventory:"",
    inventory_count_items:"",
    update_item:""
  },
  {
    id: 2,
    barcode: "98765432",
    itemName: "Office Chair",
    category: "Furniture",
    companyName: "Comfort Seating Ltd",
    costPrice: 8000,
    sellPrice: 10500,
    quantity: 30,
    taxPercent: 10,
    avatar: "/images/POS.png",
    update_inventory:"",
    inventory_count_items:"",
    update_item:""
  },
  {
    id: 3,
    barcode: "56789012",
    itemName: "Printer",
    category: "Electronics",
    companyName: "PrintMaster Co.",
    costPrice: 15000,
    sellPrice: 18500,
    quantity: 10,
    taxPercent: 16,
    avatar: "/images/POS.png",
    update_inventory:"",
    inventory_count_items:"",
    update_item:""
  },
  {
    id: 4,
    barcode: "43210987",
    itemName: "Desk Lamp",
    category: "Home & Office",
    companyName: "Bright Lights Ltd",
    costPrice: 1200,
    sellPrice: 1800,
    quantity: 50,
    taxPercent: 8,
    avatar: "/images/POS.png",
    update_inventory:"",
    inventory_count_items:"",
    update_item:""
  },
  {
    id: 5,
    barcode: "24681012",
    itemName: "Wireless Keyboard",
    category: "Electronics",
    companyName: "KeyTech Ltd",
    costPrice: 3000,
    sellPrice: 4200,
    quantity: 25,
    taxPercent: 16,
    avatar: "/images/POS.png",
    update_inventory:"",
    inventory_count_items:"",
    update_item:""
  },
  {
    id: 6,
    barcode: "13579111",
    itemName: "Smartphone",
    category: "Electronics",
    companyName: "Mobile Solutions Ltd",
    costPrice: 40000,
    sellPrice: 50000,
    quantity: 20,
    taxPercent: 16,
    avatar: "/images/POS.png",
    update_inventory:"",
    inventory_count_items:"",
    update_item:""
  },
  {
    id: 7,
    barcode: "12131415",
    itemName: "Refrigerator",
    category: "Home Appliances",
    companyName: "Cool Home Ltd",
    costPrice: 65000,
    sellPrice: 75000,
    quantity: 8,
    taxPercent: 14,
    avatar: "/images/POS.png",
    update_inventory:"",
    inventory_count_items:"",
    update_item:""
  },
  {
    id: 8,
    barcode: "99988877",
    itemName: "Air Conditioner",
    category: "Home Appliances",
    companyName: "ChillTech Ltd",
    costPrice: 55000,
    sellPrice: 63000,
    quantity: 12,
    taxPercent: 14,
    avatar: "/images/POS.png",
    update_inventory:"",
    inventory_count_items:"",
    update_item:""
  },
  {
    id: 9,
    barcode: "5554443",
    itemName: "Microwave Oven",
    category: "Kitchen Appliances",
    companyName: "HeatWave Ltd",
    costPrice: 12000,
    sellPrice: 14500,
    quantity: 18,
    taxPercent: 12,
    avatar: "/images/POS.png",
    update_inventory:"",
    inventory_count_items:"",
    update_item:""
  },
  {
    id: 10,
    barcode: "1011121",
    itemName: "Gaming Console",
    category: "Electronics",
    companyName: "GameWorld Ltd",
    costPrice: 45000,
    sellPrice: 52000,
    quantity: 10,
    taxPercent: 16,
    avatar: "/images/POS.png",
    update_inventory:"",
    inventory_count_items:"",
    update_item:""
  },
];
