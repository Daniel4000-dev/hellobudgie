'use client'

import { useState, useEffect } from "react";
import React from 'react';

import { DataTable } from "./DataTable";
import {  Columns, Payment } from "./Column";
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

export default function OverviewTable() {
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }
    
    fetchData();
  }, []);

  return (
    <div className='h-full pb4 bg-white rounded-lg'>
      <div className='-mt-6 mb6'>
        {data.length > 0 ? <DataTable columns={Columns} data={data} /> : <p>Loading...</p>}
      </div>
    </div>
  );
}
