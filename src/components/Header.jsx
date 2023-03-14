import React from 'react'

function Header() {
  return (
    <header className='w-full bg-slate-500'>
      <nav className='lg:container mx-auto p-2 flex justify-between'>
        <span>Arrow</span>
        <p>current route</p>
        <div className='space-x-2'>
          <span>micro</span>
          <span>settings</span>
        </div>
      </nav>
    </header>
  )
}

export default Header