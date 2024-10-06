import Overhead from "@/components/overview/overhead";
import { Overview } from "@/components/overview/Overview";
import OverviewProduct from "@/components/overview/OverviewProduct";
import OverviewTable from "@/components/overview/overviewTable/page";
import OverviewSummary from "@/components/OverviewSummary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-1 space-y4 p8">
      <div>
        <Overhead />
      </div>
      <div className="grid grid-cols-3 gap-4 p-8">
  
  <div className="col-span-2 space-y-4">
    <div>
      <OverviewSummary />
    </div>

    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-light">Visitors vs Order</CardTitle>
        </CardHeader>
        <CardContent className="pl-2 overflow-x">
          <Overview />
        </CardContent>
      </Card>
    </div>

    <div>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle className="text-xl font-light">Recent Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <OverviewTable />
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
        <OverviewProduct />
      </div>
    </div>
  </div>

</div>

    </div>
  );
}
