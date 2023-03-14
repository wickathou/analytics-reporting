import React from 'react'

function Detail({styler}) {
  let styleVariant = ''
  if (styler%2 === 0) {
    styleVariant = 'bg-amber-300'
  } else {
    styleVariant = 'bg-amber-600'
  }
  return (
    <li className={`flex justify-between px-2 py-4 ${styleVariant}`}>
      <h3>
        Property
      </h3>
      <div className='flex justify-between w-1/4'>
        <p>Values</p>
        <span>icon</span>
      </div>
    </li>
  )
}

export default Detail