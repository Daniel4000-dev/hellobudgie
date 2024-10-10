import Image from '@/node_modules/next/image'
import React from 'react'
import Button from './Buttonn'
import { Select } from './ui/select'
import Icon from '../public/icon'

const ProductInfo = () => {
  return (
    <div className='flex flex-col'>
        <div>
            <Image src={Icon.LaptopView} alt='' />
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
                    <Select />
                </div>
            </div>

            <div>
                <h2 className='text-xs'>Sub category</h2>
                <div>
                    <Select />
                </div>
            </div>

            {/* <div>
                <h2>Specifications</h2>
                <div className='bg-gray-500 grid grid-cols-7 whitespace-nowrap text-sm ga-4'>

                    <div className='bg-black col-start-1 col-span-1 rounded-2xl border-[1px] border-gray-200 mx-auto p-1 pl-2 '>M1 chip</div>
                    <div className='bg-black col-start-2 col-span-1 rounded-2xl border-[1px] border-gray-200 mx-auto mr4 p-1 pl-2 pr-2'>13"</div>
                    <div className='col-start-3 col-span-1 rounded-2xl border-[1px] border-gray-200 mx-auto mr-3 p-1 pl-2 pr-2'>Silver</div>
                    <div className='col-start-4 col-span-3 rounded-2xl border-[1px] border-gray-200 mx-auto p-1 pl-2 pr-2'>512GB storage, 8GB RAM</div>
                    <h2 className='col-start- col-span- rounded-2xl border-[1px] border-gray-200 mx-auto p-1 pl-3 pr-3'>Model: MKGP3LL/A</h2>
                    <h2 className='rounded-2xl border-[1px] border-gray-200 mx-auto p-1 pl-3 pr-3'>SKU: AP044CL0EGU5TNAFAMZ</h2>
                    <h2 className='rounded-2xl border-[1px] border-gray-200 mx-auto p-1 pl-3 pr-3'>0.5kg</h2>
                    <h2 className='rounded-2xl border-[1px] border-gray-200 mx-auto p-1 pl-3 pr-3'>APPLE AUTHORISED</h2>
                    <h2 className='rounded-2xl border-[1px] border-gray-200 mx-auto p-1 pl-3 pr-3'>+</h2>
                </div>
            </div> */}

            <div>
                <h2 className='text-xs'>price</h2>
                <div className='rounded-lg border-[1px] border-gray-200 m-3'>
                    <h2>#1,400,000</h2>
                </div>
            </div>

            <div>
                <h2 className='text-xs'>Payments</h2>
                <div className='rounded-lg border-[1px] border-gray-200 m-3'>
                    <h2>4 interest free payments of #350,000 billeed quarterly</h2>
                </div>
            </div>

            <div>
                <div><Button className='bg-white border-[1px] border-[#E8903D] p-8' title='Delete' /></div>
                <div><Button className='bg-white border-[1px] border-[#E8903D] p-8' title='See Preview' /></div>
            </div>
        </div>
        <div>
            <Button className='w-full' />
        </div>
    </div>
  )
}

export default ProductInfo