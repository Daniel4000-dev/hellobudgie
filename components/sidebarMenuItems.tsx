'use client'
import Image from '@/node_modules/next/image'
import Link from '@/node_modules/next/link'
import { usePathname } from "next/navigation";
import { SidebarItem } from '@/types/types'
import React from 'react'

const SidebarMenuItems = ({item} : {item : SidebarItem}) => {
    const currentRoute = usePathname();

    const activeLink = 'text-gray-50 bg-[#E8903D] w- opacity-4 rounded-lg';
    const inactiveLink = 'text-gray-400';
  return (
    <div className='ml- mb-3 text-base'>
        <Link className ={`flex gap-2 items-center ${currentRoute === item.path ? activeLink : inactiveLink}`} href={item.path}>
            <Image  className='w-4 h-4 ' src={item.icon} />
            <span className='text-white'>{item.title}</span>
        </Link>
    </div>
  )
}

export default SidebarMenuItems