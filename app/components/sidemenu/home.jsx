import React from 'react'
import Link from 'next/link'

function Homesidemenu() {
  return (
    <div>
        <div className="flex items-center justify-between">
            <Link href="/"> Dashboard</Link>
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