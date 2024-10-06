"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
    id: string
    orderId: string,
    productName: string
    price: string
    quantity: string
    date: string
  }

  export const columns: ColumnDef<Payment>[] = [
    {
      id: 'orderId',
      accessorKey: "orderId",
      header: "Order ID",
    },
    {
      id: 'productName',
      accessorKey: "productName",
      header: "Product name",
    },
    {
      id: 'price',
      accessorKey: "price",
      header: "Price",
    },
    {
      id: 'quantity',
      accessorKey: "quantity",
      header: "Quantity",
    },
    {
      id: 'date',
      accessorKey: "date",
      header: "Date",
    },
  ]