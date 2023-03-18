import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { faChevronLeft, faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';


function Header({route}) {
  let content = {
    left : '',
    center : '',
  }
  switch (route) {
    case 'home':
      content.left = '2023'
      content.center = 'Total views'
      break;
    case 'details':
      content.left = ''
      content.center = 'Detailed view'
      break;
    default:
      content.left = 'Error'
      content.center = 'Something when wrong'
      break;
  }
  return (
    <header className='w-full bg-sky-800'>
      <nav className='lg:container mx-auto p-2 flex justify-between'>
        <Link to='/'>
          <FontAwesomeIcon icon={faChevronLeft}/>
          <span className='pl-2'>{content.left}</span>
        </Link>
        <p>{content.center}</p>
        <div className='space-x-2'>
          <FontAwesomeIcon icon={faMicrophone} />
          <FontAwesomeIcon icon={faGear} />
        </div>
      </nav>
    </header>
  )
}

export default Header