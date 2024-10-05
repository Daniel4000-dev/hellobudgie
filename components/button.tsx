import { button } from '@/types/types'
import React from 'react'

const Button = ({ title = 'Save', className = ''}: button) => {
  return (
    <button className={`rounded-md bg-[#E8903D] text-white ${className}`}>
        {title}
    </button>
  )
}

export default Button