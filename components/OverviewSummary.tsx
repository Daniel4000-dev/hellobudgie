import Image from '@/node_modules/next/image'
import { OverviewSummaryItem } from '@/types/types.jsx'
import React from 'react'
import Icon from '../public/icon'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const OverviewSummary = () => {

    const SUMMARYHEAD_ITEMS: OverviewSummaryItem[] = [
        {
            title: "Total sales",
            icon: Icon.Notification,
            body: "₦789,654",
            note: "↑ 8% from last month",
        },
        {
            title: "Visitors",
            icon: Icon.Notification,
            body: "1,654",
            note: "↑ 6% from last month",
        },
        {
            title: "Total orders",
            icon: Icon.Notification,
            body: "1,974",
            note: "↓ 4% from last month",
        },
        {
            title: "Refunds",
            icon: Icon.Notification,
            body: "₦789,654",
            note: "- same as last month",
        },
    ]
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {SUMMARYHEAD_ITEMS.map((item, index) => {
        return (
        <Card className='rounded-lg h-[13vh] flex items-center' key={index}>
          <div className='ml-10'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex gap-3 ml-0'>
              {item.icon && (
            <Image className='-ml-12' src={item.icon} alt=''/>
              )}
            <div className="text-2xl font-bold">{item.body}</div>
            </div>
            <p className={`text-xs textgreen-300 text-${index === (SUMMARYHEAD_ITEMS.length - 2) ? 'red-400' : 'green-300'} ${index === (SUMMARYHEAD_ITEMS.length) && "text-black"}`}>{item.note}</p>
          </CardContent>
          </div>
        </Card>
     
        )
      })}
    </div>
  )
}

export default OverviewSummary