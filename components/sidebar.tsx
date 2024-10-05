import { SIDEBAR_ITEMS } from '@/constants/sidebar_items'
import Image from '@/node_modules/next/image'
import React from 'react'
import SidebarMenuGroup from './sidebarmenugroup'
import Logo from '../public/b.png'
import Logo2 from '../public/h.png'

const Sidebar = () => {
  return (
    <div className='bg-[#040930] fixed top-0'>
      <div className='h-screen w-[220px]'>
        <div className="pl-4 pt-6 pb-[10vh] flex gap-1 ">
          <div className='flex'>
            <Image className='h-7' src={Logo2} />
            <Image className='-ml-[11px] mt-[6px]' src={Logo} />
          </div>
            <span className='text-white text-lg'>hellobudgie</span>
        </div>
        <nav>
          <div className='ml-4 text-xs'>
            {SIDEBAR_ITEMS.map((item, index) => {
              return <SidebarMenuGroup key={index} menuGroup={item} />
            })}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar