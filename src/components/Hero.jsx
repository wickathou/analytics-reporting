import React from 'react'

function Hero({route}) {
  let heroStyle = ''
  switch (route) {
    case 'home':
      heroStyle = ''
      break;
    case 'details':
      heroStyle = 'items-end'
      break;
    default:
      break;
  }
  return (
    <>
      <div className='flex w-full'>
        <div className='bg-orange-300 w-1/2 p-2'>block</div>
        <div className={`bg-orange-500 w-1/2 p-2 flex flex-col ${heroStyle}`}>
          <h2>
            Title
          </h2>
          <p>
            Values
          </p>
        </div>
      </div>
    </>
  )
}

export default Hero