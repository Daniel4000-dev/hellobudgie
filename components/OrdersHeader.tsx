'use client'
import { SIDEBAR_ITEMS } from '@/constants/SidebarItems'
import React from 'react'
import Icon from "../public/icon";
import Image from "@/node_modules/next/image";
import { usePathname } from '@/node_modules/next/navigation';
import OverHead from './OverHead';

const OrdersHead = () => {
    const currentRoute = usePathname();
  return (
    <div>
        <div className="w-full pt-3 flex justify-between items-center ">
        <OverHead />
        </div>
    </div>
  )
}

export default OrdersHead