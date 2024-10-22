import {
  AdminTableProps,
  OrdersTableProps,
  OverviewTableProps,
  DeliveryCompanyTableProps,
  HelpCenterTableProps,
  ProductTableProps,
} from "@/types/types";
import Icon from "../public/icon";

export const OVERVIEWTABLE_ITEMS: OverviewTableProps[] = [
  {
    id: "m5gr84i9",
    orderId: "#57823",
    productName: "MacBook Pro 2022",
    price: "₦1,400,000",
    quantity: "1",
    date: "29/01/2020",
  },
  {
    id: "m5e4i4i9",
    orderId: "#57823",
    productName: "MacBook Pro 2022",
    price: "₦1,400,000",
    quantity: "1",
    date: "29/01/2020",
  },
  {
    id: "m5vdk4i9",
    orderId: "#57823",
    productName: "MacBook Pro 2022",
    price: "₦1,400,000",
    quantity: "1",
    date: "29/01/2020",
  },
  {
    id: "m5gsu8i9",
    orderId: "#57823",
    productName: "MacBook Pro 2022",
    price: "₦1,400,000",
    quantity: "1",
    date: "29/01/2020",
  },
  {
    id: "m5geo9i9",
    orderId: "#57823",
    productName: "MacBook Pro 2022",
    price: "₦1,400,000",
    quantity: "1",
    date: "29/01/2020",
  },
  {
    id: "m5gr44i9",
    orderId: "#57823",
    productName: "MacBook Pro 2022",
    price: "₦1,400,000",
    quantity: "1",
    date: "29/01/2020",
  },
  {
    id: "m5e4i4f9",
    orderId: "#57823",
    productName: "MacBook Pro 2022",
    price: "₦1,400,000",
    quantity: "1",
    date: "29/01/2020",
  },
  {
    id: "m5vhk4i9",
    orderId: "#57823",
    productName: "MacBook Pro 2022",
    price: "₦1,400,000",
    quantity: "1",
    date: "29/01/2020",
  },
  {
    id: "m51su8i9",
    orderId: "#57823",
    productName: "MacBook Pro 2022",
    price: "₦1,400,000",
    quantity: "1",
    date: "29/01/2020",
  },
  {
    id: "m5geo9l9",
    orderId: "#57823",
    productName: "MacBook Pro 2022",
    price: "₦1,400,000",
    quantity: "1",
    date: "29/01/2020",
  },
];

export const PRODUCTTABLE_ITEMS: ProductTableProps[] = [
  {
    productId: "m5gr84i9",
    productName: {icon: Icon.Laptop, name:'MacBook Pro 14" M2 chip 2022'},
    price: "₦1,400,000",
    quantity: '1',
    status: 'Approved'
  },
  {
    productId: "m5e4i4i9",
    productName: {icon: Icon.Laptop, name:"MacBook Pro 2022"},
    price: "₦1,400,000",
    quantity: '1',
    status: 'Approved'
  },
  {
    productId: "m5e4i4i9",
    productName: {icon: Icon.Laptop, name:"MacBook Pro 2022"},
    price: "₦1,400,000",
    quantity: '1',
    status: 'Pending Approval'
  },
   {
    productId: "m5e4i4i9",
    productName: {icon: Icon.Laptop, name:"MacBook Pro 2022"},
    price: "₦1,400,000",
    quantity: '1',
    status: 'Pending Approval'
  },
   {
    productId: "m5e4i4i9",
    productName: {icon: Icon.Laptop, name:"MacBook Pro 2022"},
    price: "₦1,400,000",
    quantity: '1',
    status: 'Pending Approval'
  },
  {
    productId: "m5e4i4i9",
    productName: {icon: Icon.Laptop, name:"MacBook Pro 2022"},
    price: "₦1,400,000",
    quantity: '1',
    status: 'Pending Approval'
  },
   {
    productId: "m5e4i4i9",
    productName: {icon: Icon.Laptop, name:"MacBook Pro 2022"},
    price: "₦1,400,000",
    quantity: '1',
    status: 'Pending Approval'
  },
   {
    productId: "m5e4i4i9",
    productName: {icon: Icon.Laptop, name:"MacBook Pro 2022"},
    price: "₦1,400,000",
    quantity: '1',
    status: 'Disapproved'
  },
  {
    productId: "m5e4i4i9",
    productName: {icon: Icon.Laptop, name:"MacBook Pro 2022"},
    price: "₦1,400,000",
    quantity: '1',
    status: 'Disapproved'
  },
  {
    productId: "m5e4i4i9",
    productName: {icon: Icon.Laptop, name:"MacBook Pro 2022"},
    price: "₦1,400,000",
    quantity: '1',
    status: 'Disapproved'
  },
  {
    productId: "m5e4i4i9",
    productName: {icon: Icon.Laptop, name:"MacBook Pro 2022"},
    price: "₦1,400,000",
    quantity: '1',
    status: 'Disapproved'
  },
]

export const ORDERSTABLE_ITEMS: OrdersTableProps[] = [
  {
    id: "m5gr84i9",
    orderId: "#57823",
    productName: { icon: Icon.Laptop, name: 'MacBook Pro 14" M2 chip 2022' },
    price: "₦1,400,000",
    quantity: "1",
    date: "12/02/2022",
    customerName: 'Mark Runs',
    customerEmail: 'markruns@gmail.com',
    deliveryBy: { icon: Icon.DHL, name: 'DHL' },
    status: "In progress",
  },
  {
    id: "m5e4i4i9",
    orderId: "#57823",
    productName: { icon: Icon.Laptop, name: "MacBook Pro 2022" },
    price: "₦1,400,000",
    quantity: "1",
    date: "12/02/2022",
    customerName: 'Mark Runs',
    customerEmail: 'markruns@gmail.com',
    deliveryBy: { icon: Icon.DHL, name: 'DHL' },
    status: "In progress",
  },
  {
    id: "m5e4i4i9",
    orderId: "#57823",
    productName: { icon: Icon.Laptop, name: "MacBook Pro 2022" },
    price: "₦1,400,000",
    quantity: "1",
    date: "12/02/2022",
    customerName: 'Mark Runs',
    customerEmail: 'markruns@gmail.com',
    deliveryBy: { icon: Icon.DHL, name: 'DHL' },
    status: "Delivered",
  },
  {
    id: "m5e4i4i9",
    orderId: "#57823",
    productName: { icon: Icon.Laptop, name: "MacBook Pro 2022" },
    price: "₦1,400,000",
    quantity: "1",
    date: "12/02/2022",
    customerName: 'Mark Runs',
    customerEmail: 'markruns@gmail.com',
    deliveryBy: { icon: Icon.DHL, name: 'DHL' },
    status: "Delivered",
  },
];

export const ADMINTABLE_ITEMS: AdminTableProps[] = [
  {
    id: "m5e4i4i9",
    adminId: "#57823",
    name: "James Eli",
    title: "COO",
    tier: "1",
    dateJoined: "29/01/2020",
  },
  {
    id: "m5e4ifi9",
    adminId: "#57823",
    name: "James Eli",
    title: "COO",
    tier: "1",
    dateJoined: "29/01/2020",
  },
  {
    id: "m5eti4i9",
    adminId: "#57823",
    name: "Celi Omar",
    title: "Customer Agent",
    tier: "2",
    dateJoined: "29/01/2020",
  },
  {
    id: "m5e4i4d9",
    adminId: "#57823",
    name: "Celi Omar",
    title: "Customer Agent",
    tier: "2",
    dateJoined: "29/01/2020",
  },
];

export const DELIVERYCOMPANYTABLE_ITEMS: DeliveryCompanyTableProps[] = [
  {
    id: "m5gr84i9",
    name: { icon: Icon.Speedaf, name: "Speedaf" },
    deliveryCompanyId: "#57823",
    dateAdded: "12/02/2022",
    status: "Suspended",
  },
  {
    id: "m5g584i9",
    name: { icon: Icon.UPS, name: "ups" },
    deliveryCompanyId: "#57823",
    dateAdded: "12/02/2022",
    status: "Active",
  },
  {
    id: "m5gr84l9",
    name: { icon: Icon.DHL, name: "DHL" },
    deliveryCompanyId: "#57823",
    dateAdded: "12/02/2022",
    status: "Active",
  },
  
];

export const HELPCENTERTABLE_ITEMS: HelpCenterTableProps[] = [
  {
    id: "m5e4i4d9",
    orderId: "#57823",
    subject: "lack of access to purchase item",
    email: "email@example.com",
    name: "James Eli",
    date: "29/01/2020",
  },
  {
    id: "m5e4i4d9",
    orderId: "#57823",
    subject: "lack of access to purchase item",
    email: "customeremail@example.com",
    name: "Celi Omar",
    date: "29/01/2020",
  },
  {
    id: "m5e4i2d9",
    orderId: "#57823",
    subject: "lack of access to purchase item",
    email: "email@example.com",
    name: "Celi Omar",
    date: "29/01/2020",
  },
]


