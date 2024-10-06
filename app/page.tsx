import Overhead from "@/components/overview/overhead";
import OverviewSummary from "@/components/OverviewSummary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-1 space-y4 p8">
      <div>
        <Overhead />
      </div>
      <div className="flex gap-4">
        <div>
          <div>
            <OverviewSummary />
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 xl:col-span-5">
              <CardHeader>
                <CardTitle>Subscriptions/Active users</CardTitle>
              </CardHeader>
              <CardContent className="pl-2 overflow-x">
                {/* <Overview /> */}
              </CardContent>
            </Card>
          </div>
        </div>
        <div>
          <Card className="w-[23vw] mr-8">
            <CardHeader>
              <CardTitle>Summary of complaints</CardTitle>
            </CardHeader>
            <CardContent>{/* <Complaints /> */}</CardContent>
          </Card>
        </div>
      </div>
      {/* <div>
            <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>47 pending disputes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Disputes />
                  </CardContent>
            </Card>
        </div> */}
    </div>
  );
}
