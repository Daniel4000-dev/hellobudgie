'use client'
import { SIDEBAR_ITEMS } from '@/constants/SidebarItems'
import React from 'react'
import Icon from "../public/icon";
import Image from "@/node_modules/next/image";
import { usePathname } from '@/node_modules/next/navigation';
import OverHead from './OverHead';

const AdminHead = () => {
    const currentRoute = usePathname();
  return (
    <div>
        <div className="">
        <OverHead />
        </div>
    </div>
  )
}

export default AdminHead