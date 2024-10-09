import Overhead from "@/components/overview/Overhead";
import { Overview } from "@/components/overview/Overview";
import OverviewProduct from "@/components/overview/OverviewProduct";
import OverviewTable from "@/components/overview/overviewTable/page";
import OverviewSummary from "@/components/OverviewSummary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex-1 space-y4 p8">
      <div>
        <Overhead />
      </div>
      <div className="grid grid-cols-7 gap-4 pt-8">
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
          <div className="w-full bg-white rounded-xl">
            <div>
              <h2 className="text-xl font-light p-4">Top products</h2>
            </div>
            <div className="w-full">
              <OverviewProduct />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
