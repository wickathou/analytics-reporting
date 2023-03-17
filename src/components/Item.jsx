import React from 'react'

function Item({page}) {
  return (
    <li className='w-full h-52 bg-teal-400 border p-2 flex flex-col'>
      <div className="relative">
        <span className='absolute top-0 right-0'>Icon</span>
      </div>
      <div className='h-3/4 bg-blue-400'>
        {page.data.img}
      </div>
      <div className='flex flex-col items-end'>
        <h3>
          {page.title}
        </h3>
        <p>
          {page.data.views}
        </p>
      </div>
    </li>
  )
}

export default Item