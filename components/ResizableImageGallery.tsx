import React from "react";
import Image from "next/image";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Icon from "../public/icon"; // Update to match your file structure

export function ResizableImageGallery() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-full rounded-lg border md:min-w-[450px]"
    >
      {/* Resizable Panel for Image 1 */}
      <ResizablePanel defaultSize={30}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <Image src={Icon.LaptopView} alt="Laptop View" className="object-contain" />
        </div>
      </ResizablePanel>
      <ResizableHandle />

      {/* Resizable Panel for Image 2 */}
      <ResizablePanel defaultSize={30}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <Image src={Icon.LaptopView} alt="Laptop View" className="object-contain" />
        </div>
      </ResizablePanel>
      <ResizableHandle />

      {/* Resizable Panel for Image 3 */}
      <ResizablePanel defaultSize={40}>
        <ResizablePanelGroup direction="vertical">
          {/* Inner Resizable Panel for Image 3 */}
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <Image src={Icon.LaptopView} alt="Laptop View" className="object-contain" />
            </div>
          </ResizablePanel>
          <ResizableHandle />
          {/* Resizable Panel for Image 4 */}
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <Image src={Icon.LaptopView} alt="Laptop View" className="object-contain" />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
