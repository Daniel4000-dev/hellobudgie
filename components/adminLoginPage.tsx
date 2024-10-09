import { ADMINLOGIN_ITEMS } from "@/constants/AdminLogin";
import Image from "@/node_modules/next/image";
import { adminLoginItems } from "@/types/types";
import React from "react";
import Button from "./Button";
import Icon from "../public/icon"

const AdminLoginPage = () => {
  return (
     <div className="bg-gray-50 min-h-screen">
        <div className="pl-4 pt-6 pb-[15vh]">
            <Image src={Icon.Logo} alt='logo' />
        </div>
        <div className="flex justify-center items-center">
            <div className="bg-white w-[70vw] md:w-[37vw] border-2 border-white rounded-xl shadow-lg pt-6">
                <h2 className="text-center font-semibold">Sign up as an admin</h2>
                {ADMINLOGIN_ITEMS.map((loginItem: adminLoginItems, index: number) => {
                return (
                    <div className="m-6" key={index}>
                        <h2 className='text-xs mb-1'>{loginItem.title}</h2>
                        <input className='w-full border rounded-md pl-7 text-sm p-2' placeholder={loginItem.placeholder} />
                    </div>
                );
                })}
                <div className='m-6'>
                    <Button className='w-full p-3' title='Log in' />
                </div>
            </div>
        </div>
    </div>
  );
};

export default AdminLoginPage;
