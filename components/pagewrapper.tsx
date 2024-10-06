'use client'
import React, { ReactNode } from 'react'
import classNames from 'classnames'

const Pagewrapper = ({children} : {children : ReactNode}) => {
  const pageStyle = classNames('bg-gray-50 grow text-black pl-[15.5rem] z-30')
  return (
    <div className={pageStyle}>
        {children}
    </div>
  )
}

export default Pagewrapper