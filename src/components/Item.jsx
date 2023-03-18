import { faCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Item({page, styler}) {
  return (
    <li className={`w-full h-full p-2 flex flex-col ${styler%2===0? 'bg-sky-600' : 'bg-sky-700'}`}>
      <Link to={`/${page.itemId}`}>
        <div className="relative">
          <FontAwesomeIcon className='absolute top-0 right-0' icon={faCircleRight}/>
        </div>
        <span>{styler}</span>
        <div className='lg:h-52 h-28 flex justify-center items-center'>
          <img src={page.data.img} className='lg:h-24 md:h-12 h-8' alt="" srcset="" />
        </div>
        <div className='flex flex-col items-end'>
          <h3>
            {page.title}
          </h3>
          <p>
            Views {page.data.views}
          </p>
        </div>
      </Link>
    </li>
  )
}

export default Item