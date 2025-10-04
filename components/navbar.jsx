import React from 'react'
import Link from 'next/link'

const navbar = () => {
  return (
    <nav className='flex justify-between px-4 bg-slate-800 text-white py-4'>
      <div className='logo font-bold'> FaceBook</div>
      <ul className='flex gap-6'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/contact"><li>Contact</li></Link> 
        {/* link use karna sae page reload nai hota aur eska liya hame link import bhi karna hoga */}
      </ul>
    </nav>
  )
}

export default navbar
