import { OVERVIEWPRODUCT_ITEMS } from '@/constants/overviewproduct_items'
import Image from '@/node_modules/next/image'
import Icon from '../../public/icon'
import React from 'react'

const OverviewProduct = () => {
  return (
    <div>
        <div>
            {OVERVIEWPRODUCT_ITEMS.map((item, index) => (
                <div className='flex' key={index}>
                    <div>
                        <Image src={Icon.Phone} />
                    </div>
                    <div>
                        <h2>{item.title}</h2>
                        <h2>{item.price}</h2>
                    </div>
                    <div>
                        <h2>{item.piece}</h2>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default OverviewProduct