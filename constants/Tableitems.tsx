import {
  AdminTableProps,
  OrdersTableProps,
  OverviewTableProps,
  DeliveryCompanyTableProps,
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

export const ORDERSTABLE_ITEMS: OrdersTableProps[] = [
  {
    id: "m5gr84i9",
    orderId: "#57823",
    productName: { icon: Icon.Laptop, name: 'MacBook Pro 14" M2 chip 2022' },
    price: "₦1,400,000",
    quantity: "1",
    date: "12/02/2022",
    status: "In progress",
  },
  {
    id: "m5e4i4i9",
    orderId: "#57823",
    productName: { icon: Icon.Laptop, name: "MacBook Pro 2022" },
    price: "₦1,400,000",
    quantity: "1",
    date: "12/02/2022",
    status: "In progress",
  },
  {
    id: "m5e4i4i9",
    orderId: "#57823",
    productName: { icon: Icon.Laptop, name: "MacBook Pro 2022" },
    price: "₦1,400,000",
    quantity: "1",
    date: "12/02/2022",
    status: "Delivered",
  },
  {
    id: "m5e4i4i9",
    orderId: "#57823",
    productName: { icon: Icon.Laptop, name: "MacBook Pro 2022" },
    price: "₦1,400,000",
    quantity: "1",
    date: "12/02/2022",
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

