import { SidebarItemGroup } from '@/types/types'
import React from 'react'
import SidebarMenuItems from './sidebarMenuItems'

const SidebarMenuGroup = ({menuGroup} : {menuGroup : SidebarItemGroup, className?: string}) => {
  return (
    <div className=''>
      <h3 className='mt-12 mb-3 text-white text-xs'>{menuGroup.title}</h3>
      {menuGroup.menuList?.map((item,index) => {
        return <SidebarMenuItems key={index} item={item} />
      })}
    </div>
  )
}

export default SidebarMenuGroup