import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import React from 'react'

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "m5gr84i9",
      orderId: '#57823',
      productName: "MacBook Pro 2022",
      price: "₦1,400,000",
      quantity: '1',
      date: '29/01/2020',
    },
    {
      id: "m5e4i4i9",
      orderId: '#57823',
      productName: "MacBook Pro 2022",
      price: "₦1,400,000",
      quantity: '1',
      date: '29/01/2020',
    },
    {
      id: "m5vdk4i9",
      orderId: '#57823',
      productName: "MacBook Pro 2022",
      price: "₦1,400,000",
      quantity: '1',
      date: '29/01/2020',
    },
    {
      id: "m5gsu8i9",
      orderId: '#57823',
      productName: "MacBook Pro 2022",
      price: "₦1,400,000",
      quantity: '1',
      date: '29/01/2020',
    },
    {
      id: "m5geo9i9",
      orderId: '#57823',
      productName: "MacBook Pro 2022",
      price: "₦1,400,000",
      quantity: '1',
      date: '29/01/2020',
    },
  ];
}

export default async function OverviewTable() {
  const data = await getData()
  return (
    <div className='h-full pb4 bg-white rounded-lg'>
      <div className='-mt-6 mb6'>
      <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}
