"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
    id: string
    productName: string,
    price: string
    quantity: string
  }

  export const columns: ColumnDef<Payment>[] = [
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
  ]