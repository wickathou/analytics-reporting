import { faCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function DetailList({page}) {

  return (
    <>
      <ul className='flex flex-col'>
        <li className={`flex justify-between px-2 py-4 bg-sky-600`}>
          <h3>
            Views
          </h3>
          <div className='flex justify-between w-1/4'>
            <p>{page.data.views}</p>
            <FontAwesomeIcon icon={faCircleRight}/>
          </div>
        </li>
        <li className={`flex justify-between px-2 py-4 bg-sky-700`}>
          <h3>
            Bounce Rate
          </h3>
          <div className='flex justify-between w-1/4'>
            <p>{page.data.bounceRate}</p>
            <FontAwesomeIcon icon={faCircleRight}/>
          </div>
        </li>
        <li className={`flex justify-between px-2 py-4 bg-sky-600`}>
          <h3>
            Active Users
          </h3>
          <div className='flex justify-between w-1/4'>
            <p>{page.data.activeUsers}</p>
            <FontAwesomeIcon icon={faCircleRight}/>
          </div>
        </li>
      </ul>
    </>
  )
}

export default DetailList