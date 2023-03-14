import React from 'react'

function Item() {
  return (
    <li className='w-full h-52 bg-teal-400 border p-2 flex flex-col'>
      <div className="relative">
        <span className='absolute top-0 right-0'>Icon</span>
      </div>
      <div className='h-3/4 bg-blue-400'>
        Graph
      </div>
      <div className='flex flex-col items-end'>
        <h3>
          A title
        </h3>
        <p>
          A value
        </p>
      </div>
    </li>
  )
}

export default Item