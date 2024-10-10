import { SIDEBAR_ITEMS } from "@/constants/SidebarItems";
import Image from "@/node_modules/next/image";
import React from "react";
import Icon from "../public/icon";
import SidebarMenuGroup from "./SidebarMenuGroup";

const Sidebar = () => {
  return (
    <div className="bg-[#040930] flex fixed top-0 z-50">
      <div className="h-screen w-[222px]">
        <div className="m-6 pb-10 flex items-center gap-1 ">
          <div className="flex">
            <Image className="h-7 w-4" src={Icon.H} alt='H' />
            <Image className="-ml-[12px] mt-[3px] w-5" src={Icon.B} alt='B' />
          </div>
          <span className="text-white mt-2 text-2xl">hellobudgie</span>
        </div>
        <nav>
          <div className="m-5  text-xs">
            {SIDEBAR_ITEMS.map((item, index) => {
              return (
                <SidebarMenuGroup
                  className="text-4xl"
                  key={index}
                  menuGroup={item}
                />
              );
            })}
          </div>

          <div className="text-white ml-8 bottom-6 absolute flex flex-col gap-5">
            <div className="flex gap-2">
              <Image src={Icon.DangerCircle} alt='Danger Circle' />
              <h2>Help center</h2>
            </div>
            <div className="flex gap-2">
              <Image src={Icon.Logout} alt='Logout' />
              <h2>Log out</h2>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
