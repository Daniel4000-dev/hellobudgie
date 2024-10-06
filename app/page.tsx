import Overhead from "@/components/overview/overhead";
import { Overview } from "@/components/overview/Overview";
import OverviewProduct from "@/components/overview/OverviewProduct";
import OverviewTable from '@/components/overview/overviewTable/page'
import OverviewSummary from "@/components/OverviewSummary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-1 space-y4 p8">
      <div>
        <Overhead />
      </div>
      <div className="flex gap-4 pt-8">
        <div className='flex flex-col gap-4'>
          <div>
            <OverviewSummary />
          </div>

          <div className="w-full">
            <Card className="">
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
        <div className="mb-4">
          <Card className="w-[23vw] h-[115.5vh] overflow-hidden overflow-y-scroll mr-8">
            <CardHeader>
              <CardTitle className="text-xl font-light">Top products</CardTitle>
            </CardHeader>
            <CardContent><OverviewProduct /></CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
