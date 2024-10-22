import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { useState } from "react"
import { Button } from "./ui/button";
  
  export function PaginationDemo() {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNextStep = () => {
        setCurrentStep((prevStep) => Math.min(prevStep + 1,2))
    };

    const handlePreviousStep = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1,1));
    };

    return (
        <Pagination>
       <div>
          <h2>{`Step ${currentStep} of 2`}</h2> {/* Step indicator */}
          <div className="mt-6 rounded-lg p-4 gap-4 grid grid-cols-2 [h-95vh]">
            {/* Step Content */}
            {currentStep === 1 ? (
              <div className="col-span-1 bg-white rounded-lg p-4">
                <div>
                  <h2>Step 1: General information</h2>
                  {/* Content for Step 1 */}
                  <div className="pt-3">
                    <h2 className="text-xs">Product name</h2>
                    <div className="text-sm border-2 rounded-lg p-3 pt-1">
                      <h2>MacBook Pro 14" M2 chip 2022</h2>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col-span-1 bg-white rounded-lg p-4">
                <div>
                  <h2>Step 2: Product details</h2>
                  {/* Content for Step 2 */}
                  <div className="pt-3">
                    <h2 className="text-xs">Price</h2>
                    <div className="rounded-lg border-[1px] border-gray-200 p-2">
                      <h2>#1,400,000</h2>
                    </div>
                  </div>
                  <div className="pt-3">
                    <h2 className="text-xs">Payments</h2>
                    <div className="rounded-lg border-[1px] border-gray-200 p-2">
                      <h2>4 interest-free payments of #350,000 billed quarterly</h2>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step Navigation */}
            <div className="col-span-2 flex justify-between pt-6">
              {currentStep > 1 && (
                <Button onClick={handlePreviousStep} className="p-3">
                  Previous
                </Button>
              )}
              {currentStep < 2 && (
                <Button onClick={handleNextStep} className="p-3">
                  Next
                </Button>
              )}
              {currentStep === 2 && (
                <Button className="p-3">Submit</Button> // Submit on the last step
              )}
            </div>
          </div>
        </div>
      </Pagination>
    )
  }
  