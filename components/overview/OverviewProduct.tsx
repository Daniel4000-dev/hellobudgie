import { OVERVIEWPRODUCT_ITEMS } from "@/constants/Overviewproduct_items";
import Image from "@/node_modules/next/image";
import Icon from "../../public/icon";
import React from "react";

const OverviewProduct = () => {
  return (
    <div className="w-full h-[103vh] custom-scrollbar overflow-y-scroll -p-2">
      <div className="fle gap-Z">
        {OVERVIEWPRODUCT_ITEMS.map((item, index) => (
          <div className="w-full border-b-[1px] border-gray-100 pb-1 overflowy hover:bg-gray-50" key={index}>
            <div className="p-3 flex gap-4 items-center">
              <div>
                <Image src={Icon.Phone} alt='Phone' />
              </div>
              <div className="flex flex-col">
                <h2 className="text-sm">{item.title}</h2>
                <div className="flex justify-between gap-[10vw] text-xs">
                  <h2>{item.price}</h2>
                  <h2 className="">{item.piece}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewProduct;
