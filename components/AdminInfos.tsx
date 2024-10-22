import Image from "next/image"; // Updated import path
import React from "react";
import Button from "./Buttonn";
import Icon from "../public/icon";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const AdminInfo = ({ selectedCompany }: {selectedCompany: any}) => {
  return (
    <div className="flex flex-col p-4 min-h-[100px] max-h-[600px] custom-scrollbar overflow-y-scroll">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-bold">{selectedCompany.name}</h2>
        </div>
      </div>
      <div className="pt-3">
        <div className="pt-6">
          <div className="flex items-center justify-between pt-2">
            <h2>Name:</h2>
            <h2>{selectedCompany.name}</h2>
          </div>
          <div className="flex items-center justify-between pt-2">
            <h2>ID:</h2>
            <h2>{selectedCompany.adminId}</h2>
          </div>
          <div className="flex items-center justify-between pt-2">
            <h2>Date joined:</h2>
            <h2>{selectedCompany.dateJoined}</h2>
          </div>
        </div>
      </div>
      <div className="pt-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="w-full p-3 bg-white border-2 border-[#E8903D]"
              title="Suspend"
            />
          </DialogTrigger>
          <DialogContent className="w-[30vw]">
            <div className="">
              <h2 className="text-xl font-bold mb-4">Reason for suspension</h2>
              <p className='text-sm pt-6 pb-4'>Write out your reason for suspending the admin according to the HelloBudgie guide.</p>
              <div className="text-sm border-2 p-2 rounded-lg">
                    <textarea
                      className="w-full text-xs pl-3 p-2 resize-none"
                      placeholder="Enter message"
                      rows={8}
                    >
                      The 14-inch MacBook Pro with M2 max takes power and speed to the next level, whether it's running on battery or plugged in. With a stunning liquid Retina XDR display, all the ports you need and all-day battery life.
                    </textarea>
                  </div>
              <div className="mt-4 rounded-lg">
                <Button className='w-full p-2 text-white' title="Suspend" />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AdminInfo;
