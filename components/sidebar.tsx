import { SIDEBAR_ITEMS } from '@/constants/sidebar_items'
import Image from '@/node_modules/next/image'
import React from 'react'
import SidebarMenuGroup from './sidebarmenugroup'
import Icon from '../public/icon'

const Sidebar = () => {
  return (
    <div className='bg-[#040930] flex fixed top-0 z-50'>
      <div className='h-screen w-[235px]'>
        <div className="ml-6 pt-6 pb-[10vh] flex gap-1 ">
          <div className='flex'>
            <Image className='h-7' src={Icon.H} />
            <Image className='-ml-[11px] mt-[6px]' src={Icon.B} />
          </div>
            <span className='text-white text-lg'>hellobudgie</span>
        </div>
        <nav>
          <div className='bg-green-100 m-6  text-xs'>
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