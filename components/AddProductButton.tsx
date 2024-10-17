import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Icon from "../public/icon";
import Image from "@/node_modules/next/image";
import { DELIVERYCOMPANYBUTTON_ITEMS } from "@/constants/AddCompanyItems";
import { deliveryCompanyButtonItems } from "@/types/types";
import Button from "./Buttonn";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { SelectItemIndicator } from "@radix-ui/react-select";

export function AddProductButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex gap-1 cursor-pointer text-sm hover:border-[1px] hover:border-[#E8903D] p-2 rounded-md">
          <h2>Add product</h2>
          <Image src={Icon.Add} alt="add" />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[75vw] h-[97vh] bg-gray-50">
        <DialogHeader>
          <DialogTitle>MacBook Pro 14" M2 chip 2022</DialogTitle>
        </DialogHeader>
        <div className="bg-white rounded-lg p-4">
         <div>
         <div className="grid grid-col-2">
            <div className="flex justify-between items-center">
              <div>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
              <div>
                <h2>General information</h2>
              </div>
            </div>
            <div>
              <h2>Product name</h2>
              <div className="text-sm border-2 rounded-lg p-3 pt-1">
                <h2>MacBook Pro 14" M2 chip 2022</h2>
              </div>
            </div>
          </div>
          <div className="pt-3">
            <h2 className="text-xs mb-1">Key Featires</h2>
            <div className="text-sm border-2 p-4 rounded-lg">
              <div></div>
              <div>
                <h3>
                  The 14-inch MacBook Pro with M2 max takes power and speed to
                  the next level, whether it's runnign on battery or plugged in.
                  With a stunning liquid Retina XDR display, all the ports you
                  need and all-day battery life1 - this pro laptop goes anywhere
                  you need.
                </h3>
                <h3>
                  1Battery life for Apple TV app movie playback. Battery life
                  varied by use and configuration. See apple.com/uk/batteries
                  for more information.
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
                  The 14-inch MacBook Pro with M2 max takes power and speed to
                  the next level, whether it's runnign on battery or plugged in.
                  With a stunning liquid Retina XDR display, all the ports you
                  need and all-day battery life1 - this pro laptop goes anywhere
                  you need.
                </h3>
                <h3>
                  1Battery life for Apple TV app movie playback. Battery life
                  varied by use and configuration. See apple.com/uk/batteries
                  for more information.
                </h3>
              </div>
            </div>
          </div>
          <div>
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
          <h2 className="text-xs">Quality</h2>
          <div className="rounded-lg border-[1px] border-gray-200 p-2">
            <h2>76</h2>
          </div>
        </div>

        <div className='pt-3'>
          <h2 className="text-xs">price</h2>
          <div className="rounded-lg border-[1px] border-gray-200 p-2">
            <h2>#1,400,000</h2>
          </div>
        </div>

          </div>
         </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
