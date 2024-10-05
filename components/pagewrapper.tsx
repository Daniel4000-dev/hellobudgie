'use client'
import React, { ReactNode } from 'react'
import classNames from 'classnames'

const Pagewrapper = ({children} : {children : ReactNode}) => {
  const pageStyle = classNames('bg-gray-100 grow text-black px-4 pb-4 mt3 pl-[12.6rem] sm:pl-[16rem]')
  return (
    <div className={pageStyle}>
        {children}
    </div>
  )
}

export default Pagewrapper