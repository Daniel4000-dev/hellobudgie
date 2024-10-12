'use client'

import React from 'react'
import { usePathname } from '@/node_modules/next/navigation';
import { SIDEBAR_ITEMS } from '@/constants/SidebarItems';

const HeaderName = () => {
    const currentRoute = usePathname();
  return (
    <div>
        {SIDEBAR_ITEMS.map((group, groupIndex) => (
              <div key={groupIndex}>
                {group.menuList.map((item, itemindex) => (
                  <h2 key={itemindex} className="text-3xl sm:text3xl font-bold">
                    {currentRoute === item.path && <div className=''>{item.title}</div>}
                  </h2>
                ))}
              </div>
            ))}
    </div>
  )
}

export default HeaderName