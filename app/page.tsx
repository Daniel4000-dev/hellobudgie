import OverviewTable from "@/tableInterface/page";
import { Overview } from "@/components/Overview";
import OverviewProduct from "@/components/OverviewProduct";
import OverviewSummary from "@/components/OverviewSummary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import OverHead from "@/components/OverHead";

export default function Home() {
  return (
    <div className="flex-1 space-y4 p8">
      <div>
        <OverHead />
      </div>
      <div className="grid grid-cols-7 gap-4 pt-4 custom-scrollbar overflow-y-scroll">
        <div className="col-span-5 space-y-4">
          <div>
            <OverviewSummary />
          </div>

          <div className="w-full">
            <Card>
              <CardHeader>
                <div className="text-xl font-semibold">
                  Visitors vs Order
                </div>
              </CardHeader>
              <div className=" overflow-x">
                <Overview />
              </div>
            </Card>
          </div>

          <div>
            <Card className="mb-4">
              <CardHeader>
                <CardTitle className="text-xl font-light">
                  Recent Invoices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <OverviewTable />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="col-span-2 mb-4">
          <Card className="w-full bg-white rounded-xl">
            <div>
              <h2 className="text-xl font-light p-4">Top products</h2>
            </div>
            <div className="w-full">
              <OverviewProduct />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
