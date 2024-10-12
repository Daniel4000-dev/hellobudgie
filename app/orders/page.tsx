import OrdersHead from "@/components/OrdersHeader";
import OrdersInfo from "@/components/OrdersInfos";
import OrdersTableWrapper from "@/components/OrdersTableWrapper";
import { Card } from "@/components/ui/card";

const Products = async () => {

  return (
    <div className="flex-1 space-y4">
      <div>
        <OrdersHead />
      </div>
      <div className="grid grid-cols-7 gap-4 pt-8">
        <div className="col-span-5 space-y-4 custom-scrollbar overflow-y-scroll  max-h-[600px]">
          <div>
            <Card className="mb-4">
              <div>
                <div className="text-xl font-light">
                  Recent Invoices
                </div>
              </div>
              <div>
                <OrdersTableWrapper />
              </div>
            </Card>
          </div>
        </div>

        <div className="col-span-2 custom-scrollbar overflow-y-scroll  max-h-[600px] mb-4">
          <div className="w-full bg-white rounded-xl">
            <div>
              <h2 className="text-xl font-light p-4">MacBook Pro 14" M2 chip 2022</h2>
            </div>
            <div className="w-full p-4">
              <OrdersInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;