"use client";

import { StaticImageData } from "@/node_modules/next/image";
import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
    id: string,
    productName: Pay,
    price: string
    quantity: string
  }

  export type Pay = {
    icon?: StaticImageData;
    name: string;
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