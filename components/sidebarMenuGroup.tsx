import { SidebarItemGroup } from '@/types/types'
import React from 'react'
import SidebarMenuItems from './sidebarMenuItems'

const SidebarMenuGroup = ({menuGroup} : {menuGroup : SidebarItemGroup}) => {
  return (
    <div className='ml-4 text-md'>
      <h3 className='text-white text-xs'>{menuGroup.title}</h3>
      {menuGroup.menuList?.map((item,index) => {
        return <SidebarMenuItems key={index} item={item} />
      })}
    </div>
  )
}

export default SidebarMenuGroup