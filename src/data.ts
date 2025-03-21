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
    image: "/images/POS.png",
    ur1: "/",
  },
  {
    id: 1,
    title: "INVOICE",
    image: "/images/invoice.png",
    ur1: "/",
  },
  {
    id: 1,
    title: "CUSTOMERS",
    image: "/images/customer.png",
    ur1: "/customers",
  },
  {
    id: 1,
    title: "SUPPLIERS",
    image: "/images/supplier.png",
    ur1: "/suppliers",
  },
  {
    id: 1,
    title: "STOCK",
    image: "/images/stock.png",
    ur1: "/stock",
  },
  {
    id: 1,
    title: "ACCOUNTS",
    image: "/images/account.png",
    ur1: "/",
  },
  // {
  //   id: 1,
  //   title: "EMPLOYEE",
  //   image: "/images/employee.png",
  //   ur1: "/",
  // },
  // {
  //   id: 1,
  //   title: "PAYROLL",
  //   image: "/images/payroll.png",
  //   ur1: "/",
  // },
   {
    id: 1,
    title: "OFFICE",
    image: "/images/employee.png",
    ur1: "/office",
  },
  {
    id: 1,
    title: "REPORTS",
    image: "/images/stock.png",
    ur1: "/",
  },
  {
    id: 1,
    title: "HELP",
    image: "/images/customer.png",
    ur1: "/",
  },
];

export const existingCustomers = [
  {
    id: 1,
    idNumber: 34227510,
    lastName: "Mwangi",
    firstName: "James",
    email: "james.mwangi@example.com",
    phoneNumber: "+254712345678",
    totalSpent: "Ksh 45,000",
    customerSettings: "/images/edit_icon.png",
  },
  {
    id: 2,
    idNumber: 45789234,
    lastName: "Achieng",
    firstName: "Grace",
    email: "grace.achieng@example.com",
    phoneNumber: "+254723456789",
    totalSpent: "Ksh 32,500",
    customerSettings: "/images/edit_icon.png",
  },
  {
    id: 3,
    idNumber: 56341278,
    lastName: "Kamau",
    firstName: "Peter",
    email: "peter.kamau@example.com",
    phoneNumber: "+254734567890",
    totalSpent: "Ksh 78,200",
    customerSettings: "/images/edit_icon.png",
  },
  {
    id: 4,
    idNumber: 67892345,
    lastName: "Otieno",
    firstName: "John",
    email: "john.otieno@example.com",
    phoneNumber: "+254745678901",
    totalSpent: "Ksh 21,000",
    customerSettings: "/images/edit_icon.png",
  },
  {
    id: 5,
    idNumber: 78965412,
    lastName: "Wambui",
    firstName: "Mary",
    email: "mary.wambui@example.com",
    phoneNumber: "+254756789012",
    totalSpent: "Ksh 55,600",
    customerSettings: "/images/edit_icon.png",
  },
  {
    id: 6,
    idNumber: 89456123,
    lastName: "Kariuki",
    firstName: "Samuel",
    email: "samuel.kariuki@example.com",
    phoneNumber: "+254767890123",
    totalSpent: "Ksh 37,800",
    customerSettings: "/images/edit_icon.png",
  },
  {
    id: 7,
    idNumber: 90234567,
    lastName: "Njeri",
    firstName: "Lucy",
    email: "lucy.njeri@example.com",
    phoneNumber: "+254778901234",
    totalSpent: "Ksh 92,300",
    customerSettings: "/images/edit_icon.png",
  },
  {
    id: 8,
    idNumber: 34567890,
    lastName: "Mutua",
    firstName: "Kevin",
    email: "kevin.mutua@example.com",
    phoneNumber: "+254789012345",
    totalSpent: "Ksh 41,900",
    customerSettings: "/images/edit_icon.png",
  },
  {
    id: 9,
    idNumber: 67890123,
    lastName: "Wafula",
    firstName: "Daniel",
    email: "daniel.wafula@example.com",
    phoneNumber: "+254790123456",
    totalSpent: "Ksh 64,500",
    update_inventory: "",
    inventory_count_items: "",
    update_item: "",
    customerSettings: "/images/edit_icon.png",
  },
  {
    id: 10,
    idNumber: 78901234,
    lastName: "Chebet",
    firstName: "Ann",
    email: "ann.chebet@example.com",
    phoneNumber: "+254701234567",
    totalSpent: "Ksh 29,750",
    update_inventory: "",
    inventory_count_items: "",
    update_item: "",
    customerSettings: "/images/edit_icon.png",
  },
];


export const itemInStock = [
  {
    id: 1,
    barcode: "12345678",
    itemName: "Laptop",
    category: "Electronics",
    companyName: "Tech Solutions Ltd",
    WholesalePrice: 50000,
    RetailPrice: 60000,
    quantity: 15,
    taxPercent: 16,
    avatar: "/images/POS.png",
    itemSettings: "/images/edit_icon.png",
  },
  {
    id: 2,
    barcode: "98765432",
    itemName: "Office Chair",
    category: "Furniture",
    companyName: "Comfort Seating Ltd",
    WholesalePrice: 8000,
    RetailPrice: 10500,
    quantity: 30,
    taxPercent: 10,
    avatar: "/images/POS.png",
    itemSettings: "/images/edit_icon.png",
  },
  {
    id: 3,
    barcode: "56789012",
    itemName: "Printer",
    category: "Electronics",
    companyName: "PrintMaster Co.",
    WholesalePrice: 15000,
    RetailPrice: 18500,
    quantity: 10,
    taxPercent: 16,
    avatar: "/images/POS.png",
    itemSettings: "/images/edit_icon.png",
  },
  {
    id: 4,
    barcode: "43210987",
    itemName: "Desk Lamp",
    category: "Home & Office",
    companyName: "Bright Lights Ltd",
    WholesalePrice: 1200,
    RetailPrice: 1800,
    quantity: 50,
    taxPercent: 8,
    avatar: "/images/POS.png",
    itemSettings: "/images/edit_icon.png",
  },
  {
    id: 5,
    barcode: "24681012",
    itemName: "Wireless Keyboard",
    category: "Electronics",
    companyName: "KeyTech Ltd",
    WholesalePrice: 3000,
    RetailPrice: 4200,
    quantity: 25,
    taxPercent: 16,
    avatar: "/images/POS.png",
    itemSettings: "/images/edit_icon.png",
  },
  {
    id: 6,
    barcode: "13579111",
    itemName: "Smartphone",
    category: "Electronics",
    companyName: "Mobile Solutions Ltd",
    WholesalePrice: 40000,
    RetailPrice: 50000,
    quantity: 20,
    taxPercent: 16,
    avatar: "/images/POS.png",
    itemSettings: "/images/edit_icon.png",
  },
  {
    id: 7,
    barcode: "12131415",
    itemName: "Refrigerator",
    category: "Home Appliances",
    companyName: "Cool Home Ltd",
    WholesalePrice: 65000,
    RetailPrice: 75000,
    quantity: 8,
    taxPercent: 14,
    avatar: "/images/POS.png",
    itemSettings: "/images/edit_icon.png",
  },
  {
    id: 8,
    barcode: "99988877",
    itemName: "Air Conditioner",
    category: "Home Appliances",
    companyName: "ChillTech Ltd",
    WholesalePrice: 55000,
    RetailPrice: 63000,
    quantity: 12,
    taxPercent: 14,
    avatar: "/images/POS.png",
    itemSettings: "/images/edit_icon.png",
  },
  {
    id: 9,
    barcode: "5554443",
    itemName: "Microwave Oven",
    category: "Kitchen Appliances",
    companyName: "HeatWave Ltd",
    WholesalePrice: 12000,
    RetailPrice: 14500,
    quantity: 18,
    taxPercent: 12,
    avatar: "/images/POS.png",
    itemSettings: "/images/edit_icon.png",
  },
  {
    id: 10,
    barcode: "1011121",
    itemName: "Gaming Console",
    category: "Electronics",
    companyName: "GameWorld Ltd",
    WholesalePrice: 45000,
    RetailPrice: 52000,
    quantity: 10,
    taxPercent: 16,
    avatar: "/images/POS.png",
    itemSettings: "/images/edit_icon.png",
  },
];

export const suppliersList = [
  {
    id: "1",
    companyName: "Safaricom",
    agencyName: "JMW Agency",
    category: "Cereals",
    lastName: "Mwangi",
    firstName: "John",
    email: "johnmwangi@gmail.com",
    phoneNumber: "+254718551397",
    supplierSettings: "/images/edit_icon.png",
  },
  {
    id: "2",
    companyName: "Bidco Africa",
    agencyName: "Kibo Distributors",
    category: "Edible Oils",
    lastName: "Odhiambo",
    firstName: "Kevin",
    email: "kevin.odhiambo@bidco.com",
    phoneNumber: "+254722334455",
    supplierSettings: "/images/edit_icon.png",
  },
  {
    id: "3",
    companyName: "Brookside Dairy",
    agencyName: "Lactose Suppliers",
    category: "Dairy Products",
    lastName: "Kamau",
    firstName: "Grace",
    email: "grace.kamau@brookside.co.ke",
    phoneNumber: "+254734556677",
    supplierSettings: "/images/edit_icon.png",
  },
  {
    id: "4",
    companyName: "Kenya Breweries Ltd",
    agencyName: "ABC Beverages",
    category: "Alcoholic Drinks",
    lastName: "Mutua",
    firstName: "Brian",
    email: "brian.mutua@kbl.co.ke",
    phoneNumber: "+254700123456",
    supplierSettings: "/images/edit_icon.png",
  },
  {
    id: "5",
    companyName: "Mumias Sugar",
    agencyName: "Sweet Distributors",
    category: "Sugar",
    lastName: "Wanjiru",
    firstName: "Mercy",
    email: "mercy.wanjiru@mumias.co.ke",
    phoneNumber: "+254725667788",
    supplierSettings: "/images/edit_icon.png",
  },
  {
    id: "6",
    companyName: "Unilever Kenya",
    agencyName: "Sunlight Agencies",
    category: "Household Goods",
    lastName: "Otieno",
    firstName: "James",
    email: "james.otieno@unilever.co.ke",
    phoneNumber: "+254710987654",
    supplierSettings: "/images/edit_icon.png",
  },
  {
    id: "7",
    companyName: "Unga Limited",
    agencyName: "Maize Flour Suppliers",
    category: "Flour & Grains",
    lastName: "Kariuki",
    firstName: "Catherine",
    email: "catherine.kariuki@unga.co.ke",
    phoneNumber: "+254722556677",
    supplierSettings: "/images/edit_icon.png",
  },
  {
    id: "8",
    companyName: "Coca-Cola Beverages Africa",
    agencyName: "Refresh Distributors",
    category: "Soft Drinks",
    lastName: "Ndungu",
    firstName: "David",
    email: "david.ndungu@ccba.co.ke",
    phoneNumber: "+254715998877",
    supplierSettings: "/images/edit_icon.png",
  },
  {
    id: "9",
    companyName: "Kenya Power",
    agencyName: "Energy Supply Ltd",
    category: "Utilities",
    lastName: "Obiero",
    firstName: "Sarah",
    email: "sarah.obiero@kplc.co.ke",
    phoneNumber: "+254733445566",
    supplierSettings: "/images/edit_icon.png",
  },
  {
    id: "10",
    companyName: "Bata Kenya",
    agencyName: "Footwear Distributors",
    category: "Footwear",
    lastName: "Kimani",
    firstName: "Peter",
    email: "peter.kimani@bata.co.ke",
    phoneNumber: "+254720667788",
    supplierSettings: "/images/edit_icon.png",
  },
];

export const employeeList = [
  {
    id: "1",
    idNumber: "34227510",
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
    phoneNumber: "+254123456789",
    role: "Manager",
    employeeAvatar: "/images/person_icon.png",
    employeeSettings: "/images/edit_icon.png",
  },
  {
    id: "2",
    idNumber: "45128967",
    firstName: "Jane",
    lastName: "Wanjiru",
    email: "janewanjiru@gmail.com",
    phoneNumber: "+254712345678",
    role: "Accountant",
    employeeAvatar: "/images/person_icon.png",
    employeeSettings: "/images/edit_icon.png",
  },
  {
    id: "3",
    idNumber: "37261849",
    firstName: "Michael",
    lastName: "Otieno",
    email: "michaelotieno@gmail.com",
    phoneNumber: "+254722334455",
    role: "Sales Executive",
    employeeAvatar: "/images/person_icon.png",
    employeeSettings: "/images/edit_icon.png",
  },
  {
    id: "4",
    idNumber: "48931275",
    firstName: "Aisha",
    lastName: "Abdalla",
    email: "aishaabdalla@gmail.com",
    phoneNumber: "+254733445566",
    role: "HR Manager",
    employeeAvatar: "/images/person_icon.png",
    employeeSettings: "/images/edit_icon.png",
  },
  {
    id: "5",
    idNumber: "56273984",
    firstName: "Kevin",
    lastName: "Mutua",
    email: "kevinmutua@gmail.com",
    phoneNumber: "+254744556677",
    role: "Technician",
    employeeAvatar: "/images/person_icon.png",
    employeeSettings: "/images/edit_icon.png",
  },
  {
    id: "6",
    idNumber: "67829341",
    firstName: "Linet",
    lastName: "Chebet",
    email: "linetchebet@gmail.com",
    phoneNumber: "+254755667788",
    role: "Customer Support",
    employeeAvatar: "/images/person_icon.png",
    employeeSettings: "/images/edit_icon.png",
  },
  {
    id: "7",
    idNumber: "72938154",
    firstName: "Dennis",
    lastName: "Kariuki",
    email: "denniskariuki@gmail.com",
    phoneNumber: "+254766778899",
    role: "IT Specialist",
    employeeAvatar: "/images/person_icon.png",
    employeeSettings: "/images/edit_icon.png",
  },
  {
    id: "8",
    idNumber: "83927461",
    firstName: "Cynthia",
    lastName: "Mumbi",
    email: "cynthiamumbi@gmail.com",
    phoneNumber: "+254777889900",
    role: "Marketing Executive",
    employeeAvatar: "/images/person_icon.png",
    employeeSettings: "/images/edit_icon.png",
  },
  {
    id: "9",
    idNumber: "94562738",
    firstName: "Felix",
    lastName: "Obiero",
    email: "felixobiero@gmail.com",
    phoneNumber: "+254788990011",
    role: "Procurement Officer",
    employeeAvatar: "/images/person_icon.png",
    employeeSettings: "/images/edit_icon.png",
  },
  {
    id: "10",
    idNumber: "10293847",
    firstName: "Alice",
    lastName: "Njeri",
    email: "alicenjeri@gmail.com",
    phoneNumber: "+254799001122",
    role: "Operations Manager",
    employeeAvatar: "/images/person_icon.png",
    employeeSettings: "/images/edit_icon.png",
  },
];
