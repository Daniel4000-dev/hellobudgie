'use client'

import { usePathname } from '@/node_modules/next/navigation';
import React from 'react'

import HeaderName from './HeaderName';
import HeaderOps from './HeaderOps';
import HeaderSearch from './HeaderSearch';

const OverHead = () => {
  const currentPath = usePathname();
  return (
    <div>
        <div className="w-full pt-3 flex justify-between items-center ">
            <HeaderName />
          <div className="flex items-center gap-6">
           <HeaderSearch  currentPath={currentPath} />
            <HeaderOps currentPath={currentPath} />
          </div>
        </div>
    </div>
  )
}

export default OverHead