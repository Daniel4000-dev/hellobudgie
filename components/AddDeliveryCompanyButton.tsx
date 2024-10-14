import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Icon from "../public/icon";
import Image from "@/node_modules/next/image";
import { DELIVERYCOMPANYBUTTON_ITEMS } from "@/constants/AddCompanyItems";
import { deliveryCompanyButtonItems } from "@/types/types";
import Button from "./Buttonn";

export function AddDeliveryCompanyButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex gap-1 cursor-pointer">
          <h2>Add delivery company</h2>
          <Image src={Icon.Add} alt="add" />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[445px]">
        <div>
          <DialogTitle>Add a new delivery company</DialogTitle>
        </div>
        <div className="justify-center items-center">
          <div className="pt-6">
            {DELIVERYCOMPANYBUTTON_ITEMS.map(
              (loginItem: deliveryCompanyButtonItems, index: number) => {
                return (
                  <div className="mb-4" key={index}>
                    <h2 className="text-xs mb-1">{loginItem.title}</h2>
                    <input
                      className="w-full border rounded-md pl-3 text-sm p-2"
                      placeholder={loginItem.placeholder}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className="mb-6">
          <Button className="w-full p-3 text-white" title="Add delivery company" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
