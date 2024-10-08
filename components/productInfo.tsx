import Image from '@/node_modules/next/image'
import React from 'react'
import Button from './button'

const ProductInfo = () => {
  return (
    <div className='flex flex-col'>
        <div>
            <Image />
        </div>

        <div>
            <h2>General information</h2>
            <div className='border-[1px] border-gray-200 rounded-lg '>
                <h2 className='text-xs mb-1'>Product name</h2>
                <h3 className='p-2'>MacBook Pro 14" M2 chip 2022</h3>
            </div>

            <div>
                <h2 className='text-xs mb-1'>Description</h2>
                <div>
                    <div></div>
                    <div>
                        <h3>{}</h3>
                    </div>
                </div>
            </div>

            <div>
                <h2 className='text-xs mb-1'>Key Features</h2>
                <div>
                    <div></div>
                    <div>
                        <h3>{}</h3>
                    </div>
                </div>
            </div>

            <div>
                <h2 className='text-xs'>Category</h2>
                <div>
                    
                </div>
            </div>
        </div>
        <div>
            <Button className='w-full' />
        </div>
    </div>
  )
}

export default ProductInfo