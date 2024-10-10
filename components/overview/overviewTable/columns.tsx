"use client";

import { ColumnDef } from "@tanstack/react-table";

// Define the Payment type
export type Payment = {
    id: string;
    orderId: string;
    productName: string;
    price: string;
    quantity: string;
    date: string;
};

// Utility to create column definitions more cleanly
const createColumn = <T,>(options: { id: keyof T; header: string }): ColumnDef<T> => ({
    accessorKey: options.id as string,
    header: options.header,
    cell: (info) => String(info.getValue()), // Default rendering, can be customized
});

// Define columns with the helper function to reduce redundancy and improve clarity
export const Columns: ColumnDef<Payment>[] = [
    createColumn<Payment>({ id: 'orderId', header: "Order ID" }),
    createColumn<Payment>({ id: 'productName', header: "Product Name" }),
    createColumn<Payment>({ id: 'price', header: "Price" }),
    createColumn<Payment>({ id: 'quantity', header: "Quantity" }),
    createColumn<Payment>({ id: 'date', header: "Date" })
];

