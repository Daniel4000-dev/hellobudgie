import { OVERVIEWPRODUCT_ITEMS } from "@/constants/overviewproduct_items";
import Image from "@/node_modules/next/image";
import Icon from "../../public/icon";
import React from "react";

const OverviewProduct = () => {
  return (
    <div className="w-full h-[103vh] custom-scrollbar overflow-y-scroll">
      <div className="fle gap-Z">
        {OVERVIEWPRODUCT_ITEMS.map((item, index) => (
          <div className="border-b-[1px] border-gray-100 pb-1 overflowy bg-gray-500" key={index}>
            <div className="pb-2 pt-3 flex gap-4 items-center">
              <div>
                <Image src={Icon.Phone} />
              </div>
              <div className="flex flex-col">
                <h2 className="text-sm">{item.title}</h2>
                <div className="flex justify-between gap-[7.5vw] text-xs">
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
