import React from 'react'
import { useSelector } from 'react-redux'
import Item from './Item'

function ItemList() {
  const {pageList} = useSelector((store) => store.pages)
  return (
    <>
      <ul className='grid grid-cols-2'>
        {pageList.map((page) => <Item page={page}/>)}
      </ul>
    </>
  )
}

export default ItemList