import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Icon from "../public/icon";
import Image from "@/node_modules/next/image";
import { useState } from "react";
import Button from "./Buttonn";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export function AddProductButton() {
  const [currentStep, setCurrentStep] = useState(1); // Track current step

  const handleNextStep = () => {
    if (currentStep < 2) setCurrentStep(currentStep + 1); // Go to step 2
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1); // Go back to step 1
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex gap-1 cursor-pointer text-sm hover:border-[1px] hover:border-[#E8903D] p-2 rounded-md">
          <h2>Add product</h2>
          <Image src={Icon.Add} alt="add" />
        </div>
      </DialogTrigger>
      <DialogContent handlePreviousStep={handlePreviousStep} className={`bg-gray-50 ${currentStep === 1 ? 'max-w-[75vw] max-h-full' : 'max-w-[58vw] max-h-[75vh]'}`}>
        <div className={`mt-6 pt-5 rounded-lg gap-4 grid ${currentStep === 1 ? 'grid-cols-5' : 'grid-cols-1'}`}>
          {/* First Column with Background Color */}
          <div className="col-span-3 bg-white rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h2>{`Step ${currentStep} of 2`}</h2>
              {currentStep === 1 && <h2>General Information</h2>}
            </div>

            {currentStep === 1 && (
              <div>
                {/* First Step Content */}
                <div className="pt-3">
                  <h2 className="text-xs mb-1">Product Name</h2>
                  <div className="text-sm border-2 rounded-lg p-3 pt-1">
                    <h2>MacBook Pro 14" M2 chip 2022</h2>
                  </div>
                </div>
                <div className="pt-3">
                  <h2 className="text-xs mb-1">Description</h2>
                  <div className="text-sm border-2 p-4 rounded-lg">
                    <textarea
                      className="w-full text-xs pl-3 p-2 resize-none"
                      placeholder="Enter message"
                      rows={8}
                    >
                      The 14-inch MacBook Pro with M2 max takes power and speed to the next level, whether it's running on battery or plugged in. With a stunning liquid Retina XDR display, all the ports you need and all-day battery life.
                    </textarea>
                  </div>
                </div>
                <div className="pt-3">
                  <h2 className="text-xs mb-1">Key Features</h2>
                  <div className="text-sm border-2 p-4 rounded-lg">
                    <textarea
                      className="w-full text-xs pl-3 p-2 resize-none"
                      placeholder="Enter message"
                      rows={8}
                    >
                      The 14-inch MacBook Pro with M2 max takes power and speed to the next level, whether it's running on battery or plugged in. With a stunning liquid Retina XDR display, all the ports you need and all-day battery life.
                    </textarea>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="w-full h-full mt-6 rounded-lg p-4">
                <div>
                       <div className="grid grid-cols-5 gap-2">
        <Image src={Icon.Laptop} alt="Image 1" className="object-cover w-full h-full rounded-lg" />
        <Image src={Icon.Laptop} alt="Image 2" className="object-cover w-full h-full rounded-lg" />
        <Image src={Icon.Laptop} alt="Image 3" className="object-cover w-full h-full rounded-lg" />
        <Image src={Icon.Laptop} alt="Image 4" className="object-cover w-full h-full rounded-lg" />
        <Image src={Icon.Laptop} alt="Image 5" className="object-cover w-full h-full rounded-lg" />
        <Image src={Icon.Laptop} alt="Image 3" className="object-cover w-full h-full rounded-lg" />
        <Image src={Icon.Laptop} alt="Image 4" className="object-cover w-full h-full rounded-lg" />
        <Image src={Icon.Laptop} alt="Image 5" className="object-cover w-full h-full rounded-lg" />
      </div>
                </div>
              </div>
            )}
          </div>

          {/* Second Column */}
          {currentStep === 1 && (
            <div className="col-span-2 bg-white rounded-lg p-4">
              <div className="pt-3">
                <h2 className="text-xs">Category</h2>
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

              <div className="pt-3">
                <h2 className="text-xs">Sub category</h2>
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

              <div className="pt-3">
                <h2 className="text-xs">Quality</h2>
                <div className="rounded-lg border-[1px] border-gray-200 p-2">
                  <h2>76</h2>
                </div>
              </div>

              <div className="pt-3">
                <h2 className="text-xs">Price</h2>
                <div className="rounded-lg border-[1px] border-gray-200 p-2">
                  <h2>#1,400,000</h2>
                </div>
              </div>

              <div className="pt-3">
                <h2 className="text-xs">Payments</h2>
                <div className="rounded-lg border-[1px] border-gray-200 p-2">
                  <h2>
                    4 interest-free payments of #350,000 billed quarterly
                  </h2>
                </div>
              </div>

              <div className="pt-3">
                <h2 className="text-xs">Deals</h2>
                <div className="flex items-center justify-between gap-4 p-2">
                  <h2 className="rounded-lg w-full p-2 border-[1px] border-gray-200">
                    % off
                  </h2>
                  <h2 className="rounded-lg w-full p-2 border-[1px] border-gray-200">
                    #4,825
                  </h2>
                </div>

                <div className='pt-3'>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Field 1" />
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

              <div className="pt-6">
                <Button className="w-full bg-white p-3 border-[1px] border-[#E8903D]" title="Next" onClick={handleNextStep} />
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
