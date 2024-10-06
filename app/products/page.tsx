import Producthead from "@/components/producthead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { ProductTable } from "./data-table";

const Products = () => {
  return (
    <div className="flex-1 space-y4 p8">
      <div>
        <Producthead />
      </div>
      <div className="grid grid-cols-3 gap-4 p-8">
        <div className="col-span-2 space-y-4">
          <div>
            <Card className="mb-4">
              <CardHeader>
                <CardTitle className="text-xl font-light">
                  Recent Invoices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ProductTable />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="col-span-1 mb-4">
          <div className="w-full bg-white rounded-xl">
            <div>
              <h2 className="text-xl font-light p-4">Top products</h2>
            </div>
            <div className="w-full">
              {/* <OverviewProduct /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
