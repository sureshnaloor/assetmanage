import React from 'react'
import Link from 'next/link'



function Homesidemenu() {
    
  return (
    <div className='flex flex-col justify-around gap-3 text-white mt-9 pl-3 font-thin text-sm'>
        <div className="flex items-center justify-between">
            <Link href="/dashboard"> Dashboard</Link>
        </div>
        <div className="flex items-center justify-between">
            <Link href="/assets"> Assets</Link>
        </div>
        <div className="flex items-center justify-between">
            <Link href="/materials"> Materials</Link>
        </div>
        <div className="flex items-center justify-between">
            <Link href="/vendors"> Vendors</Link>
        </div>
        <div className="flex items-center justify-between">
            <Link href="/purchases"> Purchases</Link>
        </div>
        <div className="flex items-center justify-between">
            <Link href="/projects"> Projects</Link>
        </div>
        <div className="flex items-center justify-between">
            <Link href="/telecom"> Telecom</Link>

        </div>
    </div>
  )
}

export default Homesidemenu