"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import Button from "../Buttonn";
import Image from "@/node_modules/next/image";
import Icon from "../../public/icon";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    handlePreviousStep?: () => void;
    currentStep?: number;
  }
>(({ className, children, handlePreviousStep, currentStep, ...props }, ref) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false); // State for delete confirmation dialog

  const openDeleteDialog = () => {
    console.log("Delete clicked");
    setIsDeleteDialogOpen(true);
  };
  const closeDeleteDialog = () => setIsDeleteDialogOpen(false);

  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-4 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          className
        )}
        {...props}
      >
        {children}
        <div
          className={`absolute top-4 pl-4 pr-4 flex items-center justify-between ${
            currentStep === 1 ? "w-full" : "w-full"
          } space-x-2`}
        >
          {/* X button */}
          <DialogPrimitive.Close className="flex items-center justify-center rounded-sm opacity-70 hover:opacity-100 focus:outline-none">
            <span className=" rounded-md border-[1px] p-1">
              <X className="h-4 w-4" />
            </span>
          </DialogPrimitive.Close>

          {/* Save button */}
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-white p-1">
              <Image
                src={Icon.Arrow}
                alt="arrow-left"
                onClick={handlePreviousStep}
                className="rotate-180"
              />
            </div>
            <div className="rounded-full bg-white p-1">
              <Image src={Icon.Arrow} alt="arrow-right" className="" />
            </div>
            <div className="rounded-full bg-white p-1 cursor-pointer" onClick={openDeleteDialog}>
              {/* Trigger the delete confirmation dialog */}
              <Image
                src={Icon.Delete}
                alt="delete"
                className="cursor-pointer"
              />
            </div>
            <Button title="Save" className="cursor-pointer" onClick={handlePreviousStep} />
          </div>
        </div>

        {/* Smaller Delete Confirmation Dialog */}
        {isDeleteDialogOpen && (
          <div className="fixed left-[50%] top-[50%] z-50 w-[300px] translate-x-[-50%] translate-y-[-50%] p-4 border bg-white shadow-lg rounded-lg">
            <h2 className="text-lg">Confirm Deletion</h2>
            <p>Are you sure you want to delete this item?</p>
            <div className="flex justify-end gap-4 pt-4">
              <Button
                title="Cancel"
                className=""
                onClick={closeDeleteDialog}
              />
              <Button title="Delete" className="bg-red-500 text-white" />
            </div>
          </div>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
});
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
