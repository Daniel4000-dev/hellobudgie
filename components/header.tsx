import React from "react";
import { SidebarItem } from "@/types/types";
import Icon from "../public/icon";
import { SIDEBAR_ITEMS } from "@/constants/Sidebar_items";
import Image from "@/node_modules/next/image";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-40 bg-gray-50 pb-6 pl-[15.5rem]">
      <div className="flex flex-col items-center mx8 pb-2 pt-8 ">
        <div className="w-full flex justify-between items-center gap-2">
          <div className="flex justify-start items-center gap-0.5">
            <Image className="w-5 h-5" src={Icon.Calendar} alt='calendar' />
            <h2 className="whitespace-nowrap text-sm">
              Monday, 13 February, 2022
            </h2>
          </div>
          <div className="flex justify-end items-center gap-2 mr-8">
            <Image
              width={30}
              height={30}
              className="border-r-2 rounded-full bg-white p-1 "
              src={Icon.Notification}
              alt='Notification'
            />
            <h2 className="whitespace-nowrap">Jenny Harman</h2>
            <Image src={Icon.ArrowDown} alt='Arrow Down' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
