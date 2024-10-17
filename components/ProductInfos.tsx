import Image from "@/node_modules/next/image";
import React from "react";
import Button from "./Buttonn";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Icon from "../public/icon";

const ProductInfo = () => {
  return (
    <div className="flex flex-col">
      <div>
        <Image src={Icon.LaptopView} alt="" />
      </div>

      <div>
        <h2 className="">General information</h2>
        <div className='pt-6'>
          <h2 className="text-xs mb-1">Product name</h2>
          <div className="border-[1px] border-gray-200 rounded-lg ">
            <h3 className="text-sm p-2">MacBook Pro 14" M2 chip 2022</h3>
          </div>
        </div>

        <div className="pt-3">
          <h2 className="text-xs mb-1">Description</h2>
          <div className="text-sm border-2 p-4 rounded-lg">
            <div></div>
            <div>
              <h3>
                The 14-inch MacBook Pro with M2 max takes power and speed to the
                next level, whether it's runnign on battery or plugged in. With
                a stunning liquid Retina XDR display, all the ports you need and
                all-day battery life1 - this pro laptop goes anywhere you need.
              </h3>
              <h3>
                1Battery life for Apple TV app movie playback. Battery life
                varied by use and configuration. See apple.com/uk/batteries for
                more information.
              </h3>
            </div>
          </div>
        </div>

        <div className="pt-3">
          <h2 className="text-xs mb-1">Key Featires</h2>
          <div className="text-sm border-2 p-4 rounded-lg">
            <div></div>
            <div>
              <h3>
                The 14-inch MacBook Pro with M2 max takes power and speed to the
                next level, whether it's runnign on battery or plugged in. With
                a stunning liquid Retina XDR display, all the ports you need and
                all-day battery life1 - this pro laptop goes anywhere you need.
              </h3>
              <h3>
                1Battery life for Apple TV app movie playback. Battery life
                varied by use and configuration. See apple.com/uk/batteries for
                more information.
              </h3>
            </div>
          </div>
        </div>

        <div className='pt-3'>
          <h2 className="text-xs">Category</h2>
          <div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Order ID">Order ID</SelectItem>
                <SelectItem value="Product Name">Product Name</SelectItem>
                <SelectItem value="Price">Price</SelectItem>
                <SelectItem value="Quantity">Quantity</SelectItem>
                <SelectItem value="Date">Date</SelectItem>
                <SelectItem value="Status">Status</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className='pt-3'>
          <h2 className="text-xs">Sub category</h2>
          <div>
          <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Order ID">Order ID</SelectItem>
                <SelectItem value="Product Name">Product Name</SelectItem>
                <SelectItem value="Price">Price</SelectItem>
                <SelectItem value="Quantity">Quantity</SelectItem>
                <SelectItem value="Date">Date</SelectItem>
                <SelectItem value="Status">Status</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* <div>
                <h2>Specifications</h2>
                <div className='bg-gray-500 grid grid-cols-7 whitespace-nowrap text-sm ga-4'>

                    <div className='bg-black col-start-1 col-span-1 rounded-2xl border-[1px] border-gray-200 mx-auto p-1 pl-2 '>M1 chip</div>
                    <div className='bg-black col-start-2 col-span-1 rounded-2xl border-[1px] border-gray-200 mx-auto mr4 p-1 pl-2 pr-2'>13"</div>
                    <div className='col-start-3 col-span-1 rounded-2xl border-[1px] border-gray-200 mx-auto mr-3 p-1 pl-2 pr-2'>Silver</div>
                    <div className='col-start-4 col-span-3 rounded-2xl border-[1px] border-gray-200 mx-auto p-1 pl-2 pr-2'>512GB storage, 8GB RAM</div>
                    <h2 className='col-start- col-span- rounded-2xl border-[1px] border-gray-200 mx-auto p-1 pl-3 pr-3'>Model: MKGP3LL/A</h2>
                    <h2 className='rounded-2xl border-[1px] border-gray-200 mx-auto p-1 pl-3 pr-3'>SKU: AP044CL0EGU5TNAFAMZ</h2>
                    <h2 className='rounded-2xl border-[1px] border-gray-200 mx-auto p-1 pl-3 pr-3'>0.5kg</h2>
                    <h2 className='rounded-2xl border-[1px] border-gray-200 mx-auto p-1 pl-3 pr-3'>APPLE AUTHORISED</h2>
                    <h2 className='rounded-2xl border-[1px] border-gray-200 mx-auto p-1 pl-3 pr-3'>+</h2>
                </div>
            </div> */}

        <div className='pt-3'>
          <h2 className="text-xs">price</h2>
          <div className="rounded-lg border-[1px] border-gray-200 p-2">
            <h2>#1,400,000</h2>
          </div>
        </div>

        <div className="pt-3">
          <h2 className="text-xs">Payments</h2>
          <div className="rounded-lg border-[1px] border-gray-200 p-2">
            <h2>4 interest free payments of #350,000 billeed quarterly</h2>
          </div>
        </div>

        <div className='flex gap-4 pt-6'>
            <Button className='w-full p-3 bg-white border-[1px] border-[#E8903D]' title='Delete' />
            <Button className='w-full p-3 bg-white border-[1px] border-[#E8903D]' title='See Preview' />
        </div>
      </div>
      <div className="pt-6">
        <Button className="w-full p-3" />
      </div>
    </div>
  );
};

export default ProductInfo;
