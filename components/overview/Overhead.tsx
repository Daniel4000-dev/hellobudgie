'use client'
import { SIDEBAR_ITEMS } from '@/constants/sidebar_items'
import React from 'react'
import { usePathname } from "next/navigation";
import Icon from "../../public/icon";
import Image from "@/node_modules/@next/image";

const Overhead = () => {
    const currentRoute = usePathname();
  return (
    <div>
        <div className="w-full pt-3 flex justify-between items-center ">
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
          <div className="flex items-center gap-6">
            <div className="flex items-center">
              <input
                className="rounded-full w-[23em] border-[0.1px] border-gray-300 p-2"
                placeholder={``}
              />
              <span className="bg-[#E8903D] rounded-full text-white -ml[15.5vw] -ml-[103px] md:-ml-[106px]">
                <div className="flex items-center gap-2 m-1.5 pl-2 pr-2">
                  <Image className="w-4 h-4" src={Icon.Search} alt='search' />
                  <h3>Search</h3>
                </div>
              </span>
            </div>
            <div className="flex gap-2">
              <h2 className="whitespace-nowrap">Month</h2>
              <Image src={Icon.ArrowDown} alt='arrow down' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Overhead