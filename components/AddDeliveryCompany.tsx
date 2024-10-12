import React from 'react'
import Image from "@/node_modules/next/image";
import Icon from '../public/icon'

const AddDeliveryCompany = () => {
  return (
    <div className='flex gap-1'>
        <h2>Add delivery company</h2>
        <Image src={Icon.Add} alt='add'/>
    </div>
  )
}

export default AddDeliveryCompany