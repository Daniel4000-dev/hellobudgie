"use client";
import React from "react";
import { SidebarItem } from "@/types/types";
import Icon from "../public/icon";
import { SIDEBAR_ITEMS } from "@/constants/sidebar_items";
import { usePathname } from "next/navigation";
import Image from "@/node_modules/next/image";

const Header = () => {
  const currentRoute = usePathname();
  return (
    <header className="fixed top-0 w-full z-10 bg-gray-100 pb-12 pl-[12.8rem] sm:pl-[16.5rem]">
      <div className="flex flex-col items-center mx8 pb-2 pt-8 ">
        <div className="w-full flex justify-between items-center gap-2">
          <div className='flex justify-start items-center'>
            <Image className="w-5 h-5" src={Icon.Calendar} />
            <h2 className="whitespace-nowrap">Monday, 13 February, 2022</h2>
          </div>
          <div className="flex justify-end items-center gap-2 mr-6">
            <Image width={30} height={30} className="border-r-2 rounded-full bg-white p-1 " src={Icon.Notification} />
            <h2 className="whitespace-nowrap">Jenny Harman</h2>
            <Image src={Icon.ArrowDown} />
          </div>
        </div>

        <div className="w-full flex justify-between items-center">
          <div>
            {SIDEBAR_ITEMS.map((group, groupIndex) => (
              <div key={groupIndex}>
                {group.menuList.map((item, itemindex) => (
                  <h2 key={itemindex} className="text-lg sm:text-3xl font-bold">
                    {currentRoute === item.path && <div>{item.title}</div>}
                  </h2>
                ))}
              </div>
            ))}
          </div>
          <div>
            <div>
              
            </div>
          <div className="flex gap-2 mr-6">
          <h2 className="whitespace-nowrap">Month</h2>
            <Image src={Icon.ArrowDown} />
          </div>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
